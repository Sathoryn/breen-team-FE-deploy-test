import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';

import { addButton } from './button';
import { loadSprites } from './loadGameSprites';

import { loadAudio } from './audio/loadAudio.ts';

import {
  playMusic,
  playgameOver,
  playRunningSound,
  playcatchKnifeSound
} from './audio/playAudio.ts';

import { spawnPlayer } from './spawnPlayer';
import { floorColision } from './floorCollision.ts';
import { spawnObstacles } from './spawnObstacles.ts';
import { spawnKnives } from './spawnKnives.ts';
import { floorAnim } from './floorAnim';
import { backgroundAnim } from './backgroundAnim.ts';
import { spawnBackgroundObjects } from './spawnBackgroundObjects.ts';
import { spawnTorch } from './spawnTorches.ts';

export default function initGame(
  gameRef: RefObject<HTMLCanvasElement>,
  setScore: (score: number) => void
): () => void {
  const k = initKaplay(gameRef);

  loadSprites(k);
  loadAudio(k);

  k.scene('mainMenu', () => {
    k.setBackground(40, 100, 100);
    addButton(k, 'Start', k.vec2(k.width() / 2, 200), 'game');
    // addButton(k, 'Top Scores', k.vec2(k.width() / 2, 300), 'topScores');
  });

  k.scene('topScores', () => {
    k.setBackground(200, 30, 52);
    k.add([k.text('topScores'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.scene('game', () => {
    const music = playMusic(k);
    const running = playRunningSound(k);

    k.setGravity(4000);

    k.add([k.text('game'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Game Over', k.vec2(200, 200), 'gameOver');

    backgroundAnim(k);
    k.setBackground(0, 0, 0);
    const player = spawnPlayer(k);

    spawnTorch(k);
    spawnBackgroundObjects(k);
    floorColision(k);
    floorAnim(k);
    spawnObstacles(k);
    spawnKnives(k);

    player.onUpdate(() => {
      k.onKeyPress('space', () => {
        if (player.isGrounded()) {
          running.paused = true;
          player.jump(1500);
        }
      });
      if (running.paused === true) {
        k.wait(0.6, () => {
          running.paused = false;
        });
      }
    });

    const scoreLabel = k.add([k.text('SCORE: 0'), k.pos(100, 50), k.scale(0.7), { value: 0 }]);

    player.onCollide('scorePoint', () => {
      scoreLabel.value += 1;
      scoreLabel.text = `SCORE: ${scoreLabel.value}`;
    });
    player.onCollide('knife', knife => {
      playcatchKnifeSound(k);
      k.destroy(knife);
      scoreLabel.value += 10;
      scoreLabel.text = `SCORE: ${scoreLabel.value}`;
    });

    player.onCollide('groundObstacle', () => {
      k.go('gameOver', music, running, scoreLabel.value);
    });

    player.onCollide('topObstacle', () => {
      k.go('gameOver', music, running, scoreLabel.value);
    });
  });

  k.scene('gameOver', (music, running, score) => {
    music.paused = !music.paused;
    running.paused = true;
    playgameOver(k);
    k.setBackground(0, 0, 0);
    k.add([k.pos(0, 0), k.rect(1282, 720), k.color(220, 70, 70)]);

    const scoreFrame = k.add([
      k.rect(350, 60, { radius: 8 }),
      k.pos(k.width() / 2, 200),
      k.area(),
      k.scale(1),
      k.anchor('center'),
      k.outline(4),
      k.color(255, 255, 255)
    ]);

    scoreFrame.add([
      k.text(`FINAL SCORE: ${score}`),
      k.scale(1),
      k.anchor('center'),
      k.color(0, 0, 0)
    ]);

    const inputFrame = k.add([
      k.rect(350, 60, { radius: 8 }),
      k.pos(k.width() / 2, 300),
      k.area(),
      k.scale(1),
      k.anchor('center'),
      k.outline(4),
      k.color(255, 255, 255)
    ]);

    k.add([
      k.text(`USER:`),
      k.scale(1),
      k.anchor('center'),
      k.color(0, 0, 0),
      k.pos(k.width() / 2 - 250, 300)
    ]);
    inputFrame.add([
      k.text(``),
      k.textInput(true, 3),
      k.scale(1),
      k.anchor('center'),
      k.color(0, 0, 0)
    ]);

    setScore(score);

    addButton(k, 'Main Menu', k.vec2(k.width() / 2, 400), 'mainMenu');
  });

  k.go('game');

  return k.quit;
}
