import { useState, type SyntheticEvent } from 'react';
import { useInterval } from 'usehooks-ts';
import { IoFlag } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import ScoreSubmit from '../ScoreSubmit/ScoreSubmit';
import MinesweeperCell from '../DebuggerCell/DebuggerCell';
import Button from '../Button/Button';
import { calculateBugs, createGrid, revealBugs, revealGridRecursively } from './functions';
import type { DebuggerCellData } from '../../types';
import './Debugger.css';

const gridDimensions: [number, number] = [9, 9];

const Minesweeper = () => {
  const [dimensions, setDimensions] = useState<[number, number]>(gridDimensions);
  const [grid, setGrid] = useState<DebuggerCellData[][]>(createGrid(...gridDimensions));
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [complete, setComplete] = useState(false);
  const [flags, setFlags] = useState(calculateBugs(...gridDimensions));
  const [showModal, setShowModal] = useState(false);

  useInterval(
    () => {
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
    if (complete) return;
    if (!timerRunning) startTimer();

    if (grid[y][x].bug) {
      setGameOver(true);
      stopTimer();
      setGrid(revealBugs(grid));
      return;
    }

    const newGrid = revealGridRecursively(x, y, grid);

    if (newGrid[y][x].flag) {
      newGrid[y][x].flag = false;
      setFlags(flags + 1);
    }

    setGrid(newGrid);

    const gridComplete = newGrid.reduce((acc, row) => {
      const rowComplete = row.reduce((acc, cell) => {
        if (!cell.bug && !cell.show) acc = false;
        return acc;
      }, true);

      if (!rowComplete) acc = false;
      return acc;
    }, true);

    if (gridComplete) {
      setComplete(gridComplete);
      stopTimer();
    }
  };

  const handleRightClick = (e: SyntheticEvent, x: number, y: number) => {
    e.preventDefault();

    const newGrid = structuredClone(grid);

    if (newGrid[y][x].show) return;

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
      {complete && <h3>You win!</h3>}
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
        onContextMenu={e => e.preventDefault()}
      >
        {grid.map(row =>
          row.map((cell: DebuggerCellData) => (
            <MinesweeperCell
              cell={cell}
              key={cell.id}
              leftClickHandler={handleLeftClick}
              rightClickHandler={handleRightClick}
            />
          ))
        )}
      </div>
      {complete && <Button onClick={() => setShowModal(true)}>Submit Score</Button>}
      {showModal && (
        <ScoreSubmit onClose={() => setShowModal(false)}>
          <h2>Submit your score!</h2>
          <h3>Finished in {time} seconds!</h3>
          <form action=''>
            <input type='text' maxLength={3} />
            <Button>Sumbit</Button>
          </form>
        </ScoreSubmit>
      )}
    </main>
  );
};

export default Minesweeper;
