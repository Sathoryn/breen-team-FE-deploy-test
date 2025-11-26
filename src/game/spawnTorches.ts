import { type KAPLAYCtx } from 'kaplay';

export function torch(k: KAPLAYCtx, spacing: number) {
  k.add([
    k.sprite('torch', { anim: 'run' }),
    k.pos(k.width() + spacing, k.height() - 250),
    k.scale(0.5),
    k.anchor('center'),
    k.move(k.vec2(-1, 0), 100),
    k.offscreen({ destroy: true }),
    'torch'
  ]);
}

export function spawnTorch(k: KAPLAYCtx) {
  k.wait(k.rand(3, 7), () => {
    torch(k, 0);
    spawnTorch(k);
  });
}
