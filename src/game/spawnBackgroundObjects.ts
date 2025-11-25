import type { KAPLAYCtx } from 'kaplay';

export function spawnBackgroundObjects(k: KAPLAYCtx, position = 300) {
  k.add([
    k.sprite('backgroundObject'),
    k.pos(k.width() + 100, k.height() - position),

    k.anchor('bot'),
    k.scale(2.5),
    k.move(k.vec2(-1, 0), 250),
    k.opacity(0.5),
    'backgroundObject'
  ]);
  k.wait(k.rand(5, 10), () => {
    const position = k.randi(300, 500);
    spawnBackgroundObjects(k, position);
  });
}
