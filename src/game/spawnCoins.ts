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
    const amount = k.randi(1, 4);
    // k.debug.log('coin()', amount);

    spawnCoin(k, 0);
    if (amount > 1) {
      spawnCoin(k, 100);

    }
    if (amount > 2) {
      spawnCoin(k, 200);
     
    }
    spawnCoins(k);
  });
}
