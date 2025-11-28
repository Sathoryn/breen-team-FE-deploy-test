import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';

import { loadSprites } from './loadGameSprites';
import { loadAudio } from './audio/loadAudio.ts';
import { mainMenu } from './scenes/mainMenuScene.ts';
import { playGame } from './scenes/gameScene.ts';
import { gameOver } from './scenes/gameOverScene.ts';

export default function initGame(
  gameRef: RefObject<HTMLCanvasElement>,
  setScore: (score: number) => void
): () => void {
  const k = initKaplay(gameRef);

  loadSprites(k);
  loadAudio(k);
  mainMenu(k);
  playGame(k);
  gameOver(k, setScore);

  k.go('mainMenu');

  return () => {
    k.go('gameOver');
    k.quit();
  };
}
