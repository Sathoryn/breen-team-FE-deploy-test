import { useState, type SyntheticEvent } from 'react';
import { useInterval } from 'usehooks-ts';
import { IoFlag } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import { calculateBugs, createGrid, revealBugs, revealGridRecursively } from './functions';
import type { MinesweeperCellData } from '../../types';
import './Debugger.css';

const gridDimensions: [number, number] = [20, 30];

const Minesweeper = () => {
  const [dimensions, setDimensions] = useState<[number, number]>(gridDimensions);
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid(...gridDimensions));
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flags, setFlags] = useState(calculateBugs(...gridDimensions));

  useInterval(
    () => {
      console.log(startTime);
      setTime(Math.round((Date.now() - startTime) / 1000));
    },
    timerRunning ? 200 : null
  );

  const startTimer = () => {
    setTimerRunning(true);
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const handleLeftClick = (x: number, y: number) => {
    if (!timerRunning) startTimer();

    if (grid[y][x].bug) {
      setGameOver(true);
      stopTimer();
      const updated = revealBugs(grid);
      setGrid(updated);
    } else {
      const updated = revealGridRecursively(x, y, grid);
      setGrid(updated);
    }
  };

  const handleRightClick = (e: SyntheticEvent, x: number, y: number) => {
    e.preventDefault();

    const newGrid = structuredClone(grid);

    if (newGrid[y][x].flag) {
      setFlags(flags + 1);
      newGrid[y][x].flag = false;
    } else if (flags) {
      setFlags(flags - 1);
      newGrid[y][x].flag = true;
    }

    setGrid(newGrid);
  };

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Debugger</h1>
      <div className='minesweeper__details'>
        <span>
          <IoFlag />
          {flags}
        </span>
        <span>
          <FaClock />
          {time}
        </span>
      </div>
      {gameOver && <h3>You lose!</h3>}
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
        onContextMenu={e => e.preventDefault()}
      >
        {grid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell
              cell={cell}
              key={cell.id}
              leftClickHandler={handleLeftClick}
              rightClickHandler={handleRightClick}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Minesweeper;
