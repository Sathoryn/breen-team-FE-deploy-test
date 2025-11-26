import type { KAPLAYCtx } from 'kaplay';

export function loadSprites(k: KAPLAYCtx) {
  k.loadSprite('floorSprite', './floor.png');
  k.loadSprite('background', './background.png');
  k.loadSprite('backgroundObject', './cage.png');
  k.loadSprite('groundObstacle', './bigRock.png');
  k.loadSprite('topObstacle', './stalactite.png');
  k.loadSprite('torch', './torch.png', {
    sliceX: 4,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 3,
        speed: 4,
        loop: true
      }
    }
  });

  k.loadSprite('player', './orc.png', {
    sliceX: 4,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 3,
        speed: 10,
        loop: true
      }
    }
  });

  k.loadSprite('knife', './knives.png', {
    sliceX: 2,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 1,
        speed: 4,
        loop: true
      }
    }
  });
}
