import { useEffect, useState, type SyntheticEvent } from 'react';
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
      return { x: j, y: i, show: false, bug: false, clear: false, proximity: false, flag: false };
    });
  });

  const bugCount = calculateBugs(x, y);

  for (let i = 0; i < bugCount; i++) {
    grid = addBugToGrid(grid, x, y);
  }

  return grid;
};

const gridDimensions: [number, number] = [10, 15];

const Minesweeper = () => {
  const [dimensions, setDimensions] = useState<[number, number]>(gridDimensions);
  const [grid, setGrid] = useState<MinesweeperCellData[][]>(createGrid(...gridDimensions));
  const [timer, setTimer] = useState(0);
  const [flags, setFlags] = useState(calculateBugs(...gridDimensions));

  useEffect(() => {}, []);

  const handleLeftClick = (x: number, y: number) => {
    setGrid(grid => {
      return grid.map(row => {
        return row.map(cell => (cell.x === x && cell.y === y ? { ...cell, show: true } : cell));
      });
    });
  };

  const handleRightClick = (e: SyntheticEvent, x: number, y: number) => {
    e.preventDefault();

    const gridCopy = structuredClone(grid);

    if (gridCopy[y][x].flag) {
      setFlags(flags + 1);
      gridCopy[y][x].flag = false;
    } else if (flags) {
      setFlags(flags - 1);
      gridCopy[y][x].flag = true;
    }

    setGrid(gridCopy);
  };

  return (
    <main className='minesweeper'>
      <h1 className='minesweeper__title'>Debugger</h1>
      <div>{flags}</div>
      <div
        className='minesweeper__container'
        style={{ gridTemplateColumns: `repeat(${dimensions[0]}, 1fr)` }}
        onContextMenu={e => e.preventDefault()}
      >
        {grid.map(row =>
          row.map((cell: MinesweeperCellData) => (
            <MinesweeperCell
              cell={cell}
              key={`${cell.x}${cell.y}`}
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
