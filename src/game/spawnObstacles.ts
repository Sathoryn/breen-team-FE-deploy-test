import type { KAPLAYCtx } from 'kaplay';

export function groundObstacles(k: KAPLAYCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('groundObstacle', { anim: 'run' }),
    k.pos(k.width() + 100, k.height() - 60),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 40, 30)
    }),
    k.body(),
    k.scale(2.5),
    k.move(k.vec2(-1, 0), 400),
    k.anchor('bot'),
    k.offscreen({ destroy: true }),
    'groundObstacle'
  ]);
}

export function topObstacles(k: KAPLAYCtx) {
  k.add([
    k.pos(k.width() + 200, k.height() - 60),
    k.rect(20, 300),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    k.opacity(0),
    'scorePoint'
  ]);

  k.add([
    k.sprite('topObstacle', { anim: 'run' }),
    k.pos(k.width() + 100, k.height() - 300),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 40, 30)
    }),
    k.anchor('bot'),
    k.scale(1.5),
    k.move(k.vec2(-1, 0), 400),
    k.anchor('bot'),
    'topObstacle'
  ]);
}

export function spawnObstacles(k: KAPLAYCtx) {
  k.wait(k.rand(1, 3), () => {
    const mob = k.randi(1, 6);

    if (mob === 5) {
      topObstacles(k);
    } else {
      groundObstacles(k);
    }
    spawnObstacles(k);
  });
}
