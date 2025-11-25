import type { KAPLAYCtx } from 'kaplay';
import { spawnBackground } from './spawnBackground';

export function backgroundAnim(k: KAPLAYCtx) {
  const [firstTile, secondTile] = spawnBackground(k);
  const backgroundTiles = [{ speed: -100, sections: [firstTile, secondTile] }];

  k.onUpdate(() => {
    for (const tile of backgroundTiles) {
      if (tile.sections[1].pos.x < 0) {
        tile.sections[0].moveTo(tile.sections[1].pos.x + k.width(), k.height() - 50);
        const repositionTile = tile.sections.shift();
        tile.sections.push(repositionTile);
      }

      tile.sections[0].move(tile.speed, 0);
      tile.sections[1].move(tile.speed, 0);
    }
  });
}
