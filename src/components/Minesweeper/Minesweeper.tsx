import { useState } from 'react';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import './Minesweeper.css';

const Minesweeper = () => {
  const [timer, setTimer] = useState(0);
  const [flags, setFlags] = useState(99);

  const grid = new Array(10).fill(new Array(10).fill(null));

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Minesweeper</h1>
      <div className='minesweeper__container'>
        {grid.map(row => row.map(cell => <MinesweeperCell value={cell} />))}
      </div>
    </main>
  );
};

export default Minesweeper;
