import type { KAPLAYCtx } from 'kaplay';

export function loadAudio(k: KAPLAYCtx) {
  k.loadSound('music', './sound/music.mp3');
  k.loadSound('gameOverSound', './sound/gameOverSound.mp3');
  k.loadSound('runningSound', './sound/runningSound.mp3');
  k.loadSound('catchKnifeSound', './sound/catchKnifeSound.mp3');
  k.loadSound('buttonClick', './sound/buttonClick.mp3');
}
