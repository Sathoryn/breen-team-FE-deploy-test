import type { KAPLAYCtx } from 'kaplay';

export function loadCatchKnifeSound(k: KAPLAYCtx) {
  k.loadSound('catchKnifeSound', './catchKnifeSound.mp3');
}

export function playcatchKnifeSound(k: KAPLAYCtx) {
  return k.play('catchKnifeSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}
