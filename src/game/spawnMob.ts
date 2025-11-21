import type { KAPLAYCtx } from 'kaplay';

export function spawnMob(k: KAPLAYCtx) {
  k.add([
    k.pos(1100, k.height() - 50),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('mob', { anim: 'run' }),
    k.pos(1000, k.height() - 60),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 40, 30)
    }),
    k.body(),
    k.anchor('bot'),
    k.scale(2),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    'mob'
  ]);
  k.wait(k.rand(1, 3), () => {
    spawnMob(k);
  });
  k.debug.log('spawnMob() called');
}
