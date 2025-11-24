import type { KAPLAYCtx } from 'kaplay';

export function addFloor(k: KAPLAYCtx) {
  return k.add([
    k.pos(-100, k.height() - 50),
    k.rect(k.width() + 200, 20),
    k.area(),
    k.body({ isStatic: true }),
    'floor'
  ]);
}
