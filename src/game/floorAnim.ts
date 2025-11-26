import type { KAPLAYCtx } from 'kaplay';
import { spawnFloor } from './spawnFloor';

export function floorAnim(k: KAPLAYCtx) {
  const [firstTile, secondTile] = spawnFloor(k);
  const floorTiles = [{ speed: -400, sections: [firstTile, secondTile] }];

  k.onUpdate(() => {
    for (const tile of floorTiles) {
      if (tile.sections[1].pos.x < 0) {
        tile.sections[0].moveTo(tile.sections[1].pos.x + k.width(), k.height() - 66);
        const repositionTile = tile.sections.shift();
        tile.sections.push(repositionTile);
      }

      tile.sections[0].move(tile.speed, 0);
      tile.sections[1].move(tile.speed, 0);
    }
  });
}
