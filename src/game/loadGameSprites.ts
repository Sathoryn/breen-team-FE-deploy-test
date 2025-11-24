import type { KAPLAYCtx } from 'kaplay';

export function loadPlayerSprites(k: KAPLAYCtx) {
  k.loadSprite('player', './player.png', {
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

export function loadGroundMobSprites(k: KAPLAYCtx) {
  return k.loadSprite('mob', './mob.png', {
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


export function loadFlyerMobSprites(k: KAPLAYCtx) {
  return k.loadSprite('mob', './mob.png', {
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

// export function loadBackgroundSprites(k: KAPLAYCtx) {}
