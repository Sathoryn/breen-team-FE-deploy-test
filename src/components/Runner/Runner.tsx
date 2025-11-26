import { useRef, useEffect, type RefObject } from 'react';
import { atom, useAtom } from 'jotai';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import ScoreSubmitForm from '../ScoreSubmitForm/ScoreSubmitForm';
import initGame from '../../game/initGame';
import './Runner.css';

const scoreAtom = atom(0);

const Runner = () => {
  const [score, setScore] = useAtom(scoreAtom);

  const gameRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const quit = initGame(gameRef as RefObject<HTMLCanvasElement>, setScore);

    return () => quit();
  }, [setScore]);

  return (
    <>
      {score > 0 && (
        <Modal onClose={() => setScore(0)}>
          <h2>Submit your score!</h2>
          <h3>You got a score of {score}</h3>
          <ScoreSubmitForm gameId={2} score={score} />
        </Modal>
      )}
      <div className='game'>
        <canvas ref={gameRef}></canvas>
      </div>
      <Nav />
    </>
  );
};

export default Runner;
