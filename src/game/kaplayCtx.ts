import type { RefObject } from 'react';
import kaplay from 'kaplay';

export default function initKaplay(gameRef: RefObject<HTMLCanvasElement>) {
  return kaplay({
    width: 1282,
    height: 720,
    letterbox: true,
    global: false,
    debug: true, // TODO: put back to false
    debugKey: 'f1',
    canvas: gameRef.current,
    pixelDensity: devicePixelRatio,
    crisp: true,
    maxFPS: 60,
    backgroundAudio: true
  });
}
