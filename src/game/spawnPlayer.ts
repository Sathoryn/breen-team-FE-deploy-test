import type { KAPLAYCtx } from 'kaplay';

export function spawnPlayer(k: KAPLAYCtx) {
  return k.add([
    k.sprite('player', { anim: 'run' }),
    k.pos(150, k.height() - 50),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 100, 270)
    }),
    k.body(),
    k.anchor('bot'),
    k.scale(0.5),
    k.z(10),
    'player'
  ]);
}
