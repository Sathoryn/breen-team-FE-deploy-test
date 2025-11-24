import type { KAPLAYCtx } from 'kaplay';

export function spawnCoin(k: KAPLAYCtx, spacing: number) {
  k.add([
    k.pos(k.width() + spacing, k.height() - 200),
    k.rect(20, 20),
    k.area(),
    k.anchor('bot'),
    k.move(k.vec2(-1, 0), 400),
    k.offscreen({ destroy: true }),
    'scoreCoin'
  ]);
}

export function spawnCoins(k: KAPLAYCtx) {
  k.wait(k.rand(1, 3), () => {
    const amount = k.randi(1, 3);
    k.debug.log('coin()', amount);

    spawnCoin(k, 0);
    if (amount > 0) {
      spawnCoin(k, 50);
      k.debug.log('coin() called');
    }
    if (amount > 0) {
      spawnCoin(k, 100);
      k.debug.log('coin() called');
    }
    spawnCoins(k);
  });
}
