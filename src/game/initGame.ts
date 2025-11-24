import type { RefObject } from 'react';
import initKaplay from './kaplayCtx';
import { addButton } from './button';
import { loadPlayerSprites, loadGroundMobSprites } from './loadGameSprites';
import { addPlayer } from './addPlayer';
import { addFloor } from './addFloor';
import { spawnMobs } from './spawnMobs';
import { spawnCoins } from './spawnCoins';

export default function initGame(gameRef: RefObject<HTMLCanvasElement | undefined>): void {
  const k = initKaplay(gameRef);

  loadPlayerSprites(k);
  loadGroundMobSprites(k);

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
    k.debug.log('Scene started');
    k.setGravity(4000);

    k.setBackground(100, 10, 102);
    k.add([k.text('game'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Game Over', k.vec2(200, 200), 'gameOver');

    const player = addPlayer(k);

    addFloor(k);

    spawnMobs(k);

    spawnCoins(k);

    const scoreLabel = k.add([
      k.text('score: 0'),
      k.pos(200, 100),
      { value: 0 },
      k.stay(['gameOver'])
    ]);

    player.onUpdate(() => {
      k.onKeyPress('space', () => {
        if (player.isGrounded()) {
          player.jump(1500);
        }
      });
    });

    player.onCollide('scorePoint', () => {
      scoreLabel.value += 1;
      scoreLabel.text = `score: ${scoreLabel.value}`;
    });
    player.onCollide('scoreCoin', () => {
      scoreLabel.value += 10;
      scoreLabel.text = `score: ${scoreLabel.value}`;
      // k.destroy('scoreCoin')
    });

    player.onCollide('mob', () => {
      k.go('gameOver');
    });
  });

  k.scene('gameOver', () => {
    // const scoreLabel = k.add([k.text('score: 0'), k.pos(200, 100), { value: 0 }]);

    k.setBackground(120, 200, 192);
    k.add([k.text('gameOver'), k.pos(24, 24), { value: 0 }]);
    addButton(k, 'Main Menu', k.vec2(200, 200), 'mainMenu');
  });

  k.go('game');
}
