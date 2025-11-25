import { type KAPLAYCtx } from 'kaplay';

export function knife(k: KAPLAYCtx, spacing: number) {
  k.add([
    k.sprite('knife', { anim: 'run' }),
    k.pos(k.width() + spacing, k.height() - 250),
    k.scale(0.5),
    k.area({
      shape: new k.Rect(k.vec2(0, 0), 40, 70)
    }),
    k.anchor('center'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    'knife'
  ]);
}

export function spawnKnives(k: KAPLAYCtx) {
  k.wait(k.rand(1, 3), () => {
    const amount = k.randi(1, 4);

    knife(k, 0);
    if (amount > 1) {
      knife(k, 100);
    }
    if (amount > 2) {
      knife(k, 200);
    }
    spawnKnives(k);
  });
}
