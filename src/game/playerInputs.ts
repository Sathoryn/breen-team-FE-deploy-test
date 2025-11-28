import type { AudioPlay, KAPLAYCtx, GameObj } from 'kaplay';

export function playerInputs(k: KAPLAYCtx, player: GameObj, running: AudioPlay) {
const canvas = document.querySelector('canvas'); // Kaplay creates a canvas
canvas?.addEventListener('click', () => {
  if (player.isGrounded()) {
    running.paused = true;
    player.jump(1500);
  }
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && player.isGrounded()) {
    running.paused = true;
    player.jump(1500);
  }
});

}
