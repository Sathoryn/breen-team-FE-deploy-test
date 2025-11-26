import type { KAPLAYCtx } from 'kaplay';

export function spawnBackground(k: KAPLAYCtx) {
  const firstTile = k.add([
    k.sprite('background'),
    k.pos(0, k.height() - 50),
    k.body({ isStatic: true }),
    k.anchor('botleft'),
    k.scale(k.vec2(2)),
    'background'
  ]);

  const secondTile = k.add([
    k.sprite('background'),
    k.pos(k.width(), k.height() - 50),
    k.body({ isStatic: true }),
    k.anchor('botleft'),
    k.scale(k.vec2(2)),
    'background'
  ]);

  return [firstTile, secondTile];
}
