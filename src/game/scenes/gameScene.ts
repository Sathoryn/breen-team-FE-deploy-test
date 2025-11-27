import type { KAPLAYCtx } from 'kaplay';
import { playMusic, playRunningSound, playcatchKnifeSound } from '../audio/playAudio.ts';

import { spawnPlayer } from '../spawnObjects/spawnPlayer.ts';
import { floorColision } from '../floorCollision.ts';
import { spawnObstacles } from '../spawnObjects/spawnObstacles.ts';
import { spawnKnives } from '../spawnObjects/spawnKnives.ts';
import { floorAnim } from '../floorAnim';
import { backgroundAnim } from '../backgroundAnim.ts';
import { spawnBackgroundObjects } from '../spawnObjects/spawnBackgroundObjects.ts';
import { spawnTorch } from '../spawnObjects/spawnTorches.ts';

export function playGame(k: KAPLAYCtx) {
  k.scene('game', () => {
    const music = playMusic(k);
    const running = playRunningSound(k);

    k.setGravity(4000);

    backgroundAnim(k);

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
      k.onClick(() => {
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
}
