import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';
import { addButton } from './button';

export default function initGame(gameRef: RefObject<HTMLCanvasElement | undefined>): void {
  const k = initKaplay(gameRef);

  k.scene('mainMenu', () => {
    k.setBackground(40, 100, 100);
    addButton(k, 'Start', k.vec2(200, 100), 'game');
    addButton(k, 'Top Scores', k.vec2(200, 200), 'topScores');
  });

  k.scene('topScores', () => {
    k.setBackground(200, 30, 52);
    k.add([k.text('topScores'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.scene('game', () => {
    k.setBackground(100, 10, 102);
    k.add([k.text('game'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Game Over', k.vec2(200, 200), 'gameOver');

    const floor = k.add([k.pos(0,k.height() - 200), k.rect(k.width(), 20), k.area(), k.body({ isStatic: true })]);
  });

  k.scene('gameOver', () => {
    k.setBackground(120, 200, 192);
    k.add([k.text('gameOver'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.go('game', {});
}
