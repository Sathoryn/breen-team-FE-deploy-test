import type { KAPLAYCtx } from 'kaplay';

export function addFloorSprites(k: KAPLAYCtx) {
  const firstTile = k.add([
    k.sprite('floorSprite'),
    k.pos(0, k.height() - 50),
    k.body({ isStatic: true }),
    'floorSpriteOne'
  ]);

  const secondTile = k.add([
    k.sprite('floorSprite'),
    k.pos(k.width(), k.height() - 50),
    k.body({ isStatic: true }),
    'floorSpriteTwo'
  ]);

  return [firstTile, secondTile];
}
