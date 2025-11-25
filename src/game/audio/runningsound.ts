import type { KAPLAYCtx } from 'kaplay';

export function loadRunningSound(k: KAPLAYCtx) {
  k.loadSound('runningSound', './runningSound.mp3');
}

export function playRunningSound(k: KAPLAYCtx) {
  return k.play('runningSound', {
    loop: true,
    volume: 0.1,
    paused: false
  });
}
