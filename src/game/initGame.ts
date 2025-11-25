import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';
import { addButton } from './button';
import {
  loadPlayerSprites,
  loadGroundObstacleSprite,
  loadTopObstacleSprite,
  loadFloorSprites,
  loadKnifeSprite
} from './loadGameSprites';
import { spawnPlayer } from './spawnPlayer';
import { floorColision } from './floorColision';
import { spawnObstacles } from './spawnObstacles.ts';
import { spawnKnives } from './spawnKnives.ts';
import { loadMusic, playMusic } from './audio/loadMusic';
import { floorAnim } from './floorAnim';
import { loadGameOver } from './audio/loadGameOverSound';
import { playgameOver } from './audio/loadGameOverSound';
import { loadRunningSound } from './audio/runningsound';
import { playRunningSound } from './audio/runningsound';
import { loadCatchKnifeSound } from './audio/catchKnifeSound.ts';
import { playcatchKnifeSound } from './audio/catchKnifeSound.ts';

export default function initGame(gameRef: RefObject<HTMLCanvasElement | undefined>): void {
  const k = initKaplay(gameRef);

  loadPlayerSprites(k);
  loadGroundObstacleSprite(k);
  loadTopObstacleSprite(k);
  loadFloorSprites(k);
  loadKnifeSprite(k);
  loadMusic(k);
  loadGameOver(k);
  loadRunningSound(k);
  loadCatchKnifeSound(k);

  k.scene('mainMenu', () => {
    k.setBackground(40, 100, 100);
    addButton(k, 'Start', k.vec2(200, 100), 'game');
    addButton(k, 'Top Scores', k.vec2(200, 200), 'topScores');
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

    k.setBackground(100, 10, 102);
    k.add([k.text('game'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Game Over', k.vec2(200, 200), 'gameOver');

    const player = spawnPlayer(k);

    floorColision(k);
    floorAnim(k);
    spawnObstacles(k);
    spawnKnives(k);

    const scoreLabel = k.add([
      k.text('score: 0'),
      k.pos(200, 100),
      { value: 0 },
      k.stay(['gameOver'])
    ]);

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

    player.onCollide('scorePoint', () => {
      scoreLabel.value += 1;
      scoreLabel.text = `score: ${scoreLabel.value}`;
    });
    player.onCollide('scoreCoin', coin => {
      playcatchKnifeSound(k);
      k.destroy(coin);
      scoreLabel.value += 10;
      scoreLabel.text = `score: ${scoreLabel.value}`;
    });

    player.onCollide('groundObstacle', () => {
      k.go('gameOver', music, running);
    });
    player.onCollide('topObstacle', () => {
      k.go('gameOver', music, running);
    });
  });

  k.scene('gameOver', (music, running) => {
    music.paused = !music.paused;
    running.paused = true;
    playgameOver(k);
    k.setBackground(120, 200, 192);
    k.add([k.text('gameOver'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.go('game');
}
