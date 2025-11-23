import { useState, type SyntheticEvent } from 'react';
import MinesweeperCell from '../MinesweeperCell/MinesweeperCell';
import type { MinesweeperCellData } from '../../types';
import './Minesweeper.css';

const calculateBugs = (x: number, y: number) => Math.round(((x * y) / 10) * (1 + (x * y) / 450));

const addBugToGrid = (grid: MinesweeperCellData[][], x: number, y: number) => {
  const gridCopy = structuredClone(grid);

  const randomRow = Math.floor(Math.random() * y);
  const randomColumn = Math.floor(Math.random() * x);

  if (gridCopy[randomRow][randomColumn].bug) return addBugToGrid(grid, x, y);

  gridCopy[randomRow][randomColumn].bug = true;

  return gridCopy;
};

const createGrid = (x: number, y: number) => {
  let grid = new Array(y).fill(new Array(x).fill(null));

  grid = grid.map((row, i) => {
    return row.map((_cell: null, j: number) => {
      return { x: j, y: i, show: false, bug: false, clear: false, proximity: false };
    });
  });

  const bombCount = calculateBugs(x, y);

  for (let i = 0; i < bombCount; i++) {
    grid = addBugToGrid(grid, x, y);
  }

  return grid;
};

const Minesweeper = () => {
  const [dimensions, setDimensions] = useState<[number, number]>([9, 9]);
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid(...dimensions));
  // const [timer, setTimer] = useState(0);
  // const [flags, setFlags] = useState(99);

  const handleClick = (e: SyntheticEvent, x: number, y: number) => {
    console.log(e);
    setGrid(grid => {
      return grid.map(row => {
        return row.map(cell => (cell.x === x && cell.y === y ? { ...cell, show: true } : cell));
      });
    });
  };

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Debugger</h1>
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
      >
        {grid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell cell={cell} key={`${cell.x}${cell.y}`} clickHandler={handleClick} />
          ))
        )}
      </div>
    </main>
  );
};

export default Minesweeper;
