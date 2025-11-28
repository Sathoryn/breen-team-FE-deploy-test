import type { AudioPlay, KAPLAYCtx, GameObj } from 'kaplay';

export function playerInputs(k: KAPLAYCtx, player: GameObj, running: AudioPlay) {
k.ready(() =>{
      
      k.onKeyPown('Space', () => {
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
})
  player.onUpdate(() => {

    if (running.paused === true) {
      k.wait(0.6, () => {
        running.paused = false;
      });
    }
  });
}
