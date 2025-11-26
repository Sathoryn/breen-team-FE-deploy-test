import type { KAPLAYCtx } from 'kaplay';

export function spawnFloor(k: KAPLAYCtx) {
  const firstTile = k.add([
    k.sprite('floorSprite'),
    k.pos(0, k.height() - 66),
    k.body({ isStatic: true }),
    k.scale(2),
    'floorSpriteOne'
  ]);

  const secondTile = k.add([
    k.sprite('floorSprite'),
    k.pos(k.width(), k.height() - 66),
    k.body({ isStatic: true }),
    k.scale(2),
    'floorSpriteTwo'
  ]);

  return [firstTile, secondTile];
}
