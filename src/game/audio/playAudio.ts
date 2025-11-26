import type { KAPLAYCtx } from "kaplay";

export function playMusic(k: KAPLAYCtx) {
  return k.play('music', {
    loop: true,
    volume: 0.1,
    paused: false
  });
}

export function playgameOver(k: KAPLAYCtx) {
  return k.play('gameOverSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}

export function playRunningSound(k: KAPLAYCtx) {
  return k.play('runningSound', {
    loop: true,
    volume: 0.1,
    paused: false
  });
}


export function playcatchKnifeSound(k: KAPLAYCtx) {
  return k.play('catchKnifeSound', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}

export function playbuttonClick(k: KAPLAYCtx) {
  return k.play('buttonClick', {
    loop: false,
    volume: 0.1,
    paused: false
  });
}