import type { KAPLAYCtx } from 'kaplay';

export function spawnGameOverImage(k: KAPLAYCtx) {
  k.add([
    k.sprite('gameOverImage'),
    k.pos(k.width() / 2 + 15, k.height() / 2),
    k.scale(2.1),
    k.anchor('center'),
    'gameOverImage'
  ]);
}
