import type { KAPLAYCtx } from 'kaplay';

import { playMusic, playRunningSound } from '../audio/playAudio.ts';

import { spawnPlayer } from '../spawnObjects/spawnPlayer.ts';
import { playerInputs } from '../playerInputs.ts';
import { playerCollision } from '../playerCollision.ts';

import { floorColision } from '../floorCollision.ts';
import { spawnObstacles } from '../spawnObjects/spawnObstacles.ts';
import { spawnKnives } from '../spawnObjects/spawnKnives.ts';
import { floorAnim } from '../floorAnim';
import { backgroundAnim } from '../backgroundAnim.ts';
import { spawnCages } from '../spawnObjects/spawnCages.ts';
import { spawnTorch } from '../spawnObjects/spawnTorches.ts';

export function playGame(k: KAPLAYCtx) {
  k.scene('game', () => {
    const music = playMusic(k);
    const running = playRunningSound(k);

    const scoreLabel = k.add([
      k.text('SCORE: 0'),
      { font: 'font' },
      k.pos(100, 50),
      k.scale(0.7),
      { value: 0 },
      k.z(10),
      k.color(255, 153, 70)
    ]);

    k.setGravity(4000);
    backgroundAnim(k);

    const player = spawnPlayer(k);

    playerInputs(k, player, running);
    playerCollision(k, player, scoreLabel, music, running);

    floorColision(k);
    floorAnim(k);
    spawnObstacles(k);
    spawnKnives(k);
    spawnCages(k);
    spawnTorch(k);
  });
}
