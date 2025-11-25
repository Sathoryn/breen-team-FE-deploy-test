import { useRef, useEffect, type RefObject } from 'react';
import Nav from '../Nav/Nav';
import initGame from '../../game/initGame';
import './Runner.css';

const Runner = () => {
  const gameRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initGame(gameRef as RefObject<HTMLCanvasElement>);
  }, []);

  return (
    <>
      <div className='game'>
        <canvas ref={gameRef}></canvas>
      </div>
      <Nav />
    </>
  );
};

export default Runner;
