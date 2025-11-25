import type { KAPLAYCtx } from 'kaplay';

export function loadMusic(k: KAPLAYCtx) {
  k.loadSound('music', './music.mp3');
}

export function playMusic(k: KAPLAYCtx) {
  return k.play('music', {
    loop: true,
    volume: 0.1,
    paused: false
  });
}
