import type { KAPLAYCtx } from 'kaplay';

export function loadGameOver(k: KAPLAYCtx) {
  k.loadSound('gameOverSound', './gameOverSound.mp3');
}

export function playgameOver(k: KAPLAYCtx) {
  return k.play('gameOverSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}
