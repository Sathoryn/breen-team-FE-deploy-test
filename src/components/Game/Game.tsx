import { useRef, useEffect } from 'react';
import initGame from '../../game/initGame';
import './Game.css';

const Game = () => {
  const gameRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initGame(gameRef);
  }, []);

  return <canvas ref={gameRef} className='game'></canvas>;
};

export default Game;
