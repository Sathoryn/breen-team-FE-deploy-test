import type { KAPLAYCtx } from 'kaplay';
import { spawnMainMenuImage } from '../spawnObjects/spawnMainMenuImage';
import { addButton } from '../button';

export function mainMenu(k: KAPLAYCtx) {
  k.scene('mainMenu', () => {
    spawnMainMenuImage(k);
    addButton(k, 'Start', k.vec2(k.width() / 2, 500), 'game');
  });
}
