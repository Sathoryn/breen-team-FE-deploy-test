import type { AudioPlay, KAPLAYCtx, GameObj } from 'kaplay';
import { playcatchKnifeSound } from './audio/playAudio';

export function playerCollision(
  k: KAPLAYCtx,
  player: GameObj,
  scoreLabel: GameObj,
  music: AudioPlay,
  running: AudioPlay
) {
  player.onCollide('scorePoint', () => {
    scoreLabel.value += 1;
    scoreLabel.text = `SCORE: ${scoreLabel.value}`;
  });
  player.onCollide('knife', (knife: GameObj) => {
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
}
