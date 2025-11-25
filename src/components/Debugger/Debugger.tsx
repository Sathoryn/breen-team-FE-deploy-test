import { useState, type SyntheticEvent } from 'react';
import { useInterval } from 'usehooks-ts';
import { IoMdSettings } from 'react-icons/io';
import { IoFlag } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import Modal from '../Modal/Modal';
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
  const [showScoreSubmit, setShowScoreSubmit] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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

  const handleGameReset = (x?: number, y?: number) => {
    setGameOver(false);
    setComplete(false);
    setTime(0);
    setStartTime(0);
    setTimerRunning(false);
    if (x && y) {
      setFlags(calculateBugs(x, y));
      setGrid(createGrid(x, y));
    } else {
      setFlags(calculateBugs(...dimensions));
      setGrid(createGrid(...dimensions));
    }
  };

  const handleChangeSettings = (x: number, y: number) => {
    setShowSettings(false);
    setDimensions([x, y]);
    setGrid(createGrid(x, y));
    handleGameReset(x, y);
  };

  return (
    <main className='minesweeper'>
      <div className='minesweeper__title'>
        <h1>Debugger</h1>
        <button onClick={() => setShowSettings(true)}>
          <IoMdSettings />
        </button>
        {showSettings && (
          <Modal onClose={() => setShowSettings(false)}>
            <h2>Difficulty</h2>
            <Button onClick={() => handleChangeSettings(9, 9)}>Easy</Button>
            <Button onClick={() => handleChangeSettings(16, 16)}>Intermediate</Button>
            <Button onClick={() => handleChangeSettings(16, 30)}>Advanced</Button>
          </Modal>
        )}
      </div>
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
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
        onContextMenu={e => e.preventDefault()}
      >
        {gameOver && <h3 className='gameOver lose'>You lose!</h3>}
        {complete && <h3 className='gameOver win'>You win!</h3>}
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
      {(gameOver || complete) && <Button onClick={handleGameReset}>Reset grid</Button>}
      {complete && <Button onClick={() => setShowScoreSubmit(true)}>Submit Score</Button>}
      {showScoreSubmit && (
        <Modal onClose={() => setShowScoreSubmit(false)}>
          <h2>Submit your score!</h2>
          <h3>Finished in {time} seconds!</h3>
          <form action=''>
            <input type='text' maxLength={3} />
            <Button>Sumbit</Button>
          </form>
        </Modal>
      )}
    </main>
  );
};

export default Minesweeper;
