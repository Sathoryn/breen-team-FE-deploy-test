import type { KAPLAYCtx } from 'kaplay';

export function loadAudio(k: KAPLAYCtx) {
  k.loadSound('music', './music.mp3');
  k.loadSound('gameOverSound', './gameOverSound.mp3');
  k.loadSound('runningSound', './runningSound.mp3');
  k.loadSound('catchKnifeSound', './catchKnifeSound.mp3');
  k.loadSound('buttonClick', './buttonClick.mp3');

}
