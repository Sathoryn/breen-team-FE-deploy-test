import type { AudioPlay, KAPLAYCtx, GameObj } from 'kaplay';

export function playerInputs(k: KAPLAYCtx, player: GameObj, running: AudioPlay) {
  player.onUpdate(() => {
    k.onKeyPress('space', () => {
      if (player.isGrounded()) {
        running.paused = true;
        player.jump(1500);
      }
    });
    k.onClick(() => {
      if (player.isGrounded()) {
        running.paused = true;
        player.jump(1500);
      }
    });
    if (running.paused === true) {
      k.wait(0.6, () => {
        running.paused = false;
      });
    }
  });
}
