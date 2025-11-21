import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';

export default function initGame(gameRef: RefObject): void {
  const k = initKaplay(gameRef);

  k.setBackground(100, 10, 102);
}
