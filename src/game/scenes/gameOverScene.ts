import type { KAPLAYCtx } from 'kaplay';
import { playgameOver } from '../audio/playAudio.ts';
import { addButton } from '../button.ts';

export function gameOver(k: KAPLAYCtx, setScore: (score: number) => void) {
  k.scene('gameOver', (music, running, score) => {
    k.pos(k.width() / 2, k.height() / 2);
    music.paused = !music.paused;
    running.paused = true;
    playgameOver(k);
    k.setBackground(0, 0, 0);
    k.add([k.pos(0, 0), k.rect(1282, 720), k.color(0, 0, 0)]);

    const scoreFrame = k.add([
      k.sprite('labelImage'),

      k.pos(k.width() / 2, 200),
      k.area(),
      k.scale(2),
      k.anchor('center'),
      k.outline(4),
      k.color(255, 255, 255)
    ]);

    scoreFrame.add([
      k.text(`FINAL SCORE: ${score}`, { size: 20 }),
      k.scale(1),
      k.anchor('center'),
      k.color(255, 153, 0)
    ]);

    addButton(k, 'Main Menu', k.vec2(k.width() / 2, 400), 'mainMenu');

    setScore(score);
  });
}
