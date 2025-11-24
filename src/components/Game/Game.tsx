import { useRef, useEffect, type RefObject } from 'react';
import initGame from '../../game/initGame';
import './Game.css';

const Game = () => {
  const gameRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initGame(gameRef as RefObject<HTMLCanvasElement>);
  }, []);

  return (
    <div className='game'>
      <canvas ref={gameRef}></canvas>
    </div>
  );
};

export default Game;
