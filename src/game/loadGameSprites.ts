import type { KAPLAYCtx } from 'kaplay';

export function loadPlayerSprites(k: KAPLAYCtx) {
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
}

export function loadGroundObstacleSprite(k: KAPLAYCtx) {
  return k.loadSprite('groundObstacle', './bigRock.png', {
    sliceX: 1,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 0
        // speed: 4,
        // loop: true
      }
    }
  });
}

export function loadTopObstacleSprite(k: KAPLAYCtx) {
  return k.loadSprite('topObstacle', './bigRock.png', {
    sliceX: 1,
    sliceY: 1,
    anims: {
      run: {
        from: 0,
        to: 0
        // speed: 4,
        // loop: true
      }
    }
  });
}

export function loadKnifeSprite(k: KAPLAYCtx) {
  return k.loadSprite('knife', './knives.png', {
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

export function loadFloorSprites(k: KAPLAYCtx) {
  return k.loadSprite('floorSprite', './floor.png');
}
