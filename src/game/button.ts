import type { KAPLAYCtx, Vec2 } from 'kaplay';
import { playbuttonClick } from './audio/playAudio';
export function addButton(k: KAPLAYCtx, txt: string, p: Vec2, goTo: string) {
  const btn = k.add([
    k.rect(240, 80, { radius: 8 }),
    k.pos(p),
    k.area(),
    k.scale(1),
    k.anchor('center'),
    k.outline(4),
    k.color(255, 255, 255)
  ]);

  btn.add([k.text(txt), k.anchor('center'), k.color(0, 0, 0)]);

  btn.onClick(() => {
    playbuttonClick(k);
    k.go(goTo);
  });
  return btn;
}
