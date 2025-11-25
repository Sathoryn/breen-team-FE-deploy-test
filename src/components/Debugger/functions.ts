import type { DebuggerCellData } from '../../types';

export const calculateBugs = (x: number, y: number): number =>
  Math.round(((x * y) / 10) * (1 + (x * y) / 450));

export const addBugToGrid = (
  grid: DebuggerCellData[][],
  x: number,
  y: number
): DebuggerCellData[][] => {
  const newGrid = structuredClone(grid);
  const randomRow = Math.floor(Math.random() * y);
  const randomColumn = Math.floor(Math.random() * x);

  if (newGrid[randomRow][randomColumn].bug) return addBugToGrid(grid, x, y);
  newGrid[randomRow][randomColumn].bug = true;

  return newGrid;
};

export const createGrid = (x: number, y: number): DebuggerCellData[][] => {
  let grid = new Array(y).fill(new Array(x).fill(null));

  grid = grid.map((row, i) => {
    return row.map((_cell: null, j: number) => {
      return {
        id: Number(`${j}${i}`),
        x: j,
        y: i,
        show: false,
        bug: false,
        proximity: 0,
        flag: false
      };
    });
  });

  const bugCount = calculateBugs(x, y);

  for (let i = 0; i < bugCount; i++) {
    grid = addBugToGrid(grid, x, y);
  }

  grid.forEach((row: DebuggerCellData[]) => {
    row.forEach((cell: DebuggerCellData) => {
      if (!cell.bug) {
        for (let i = cell.y - 1; i <= cell.y + 1; i++) {
          for (let j = cell.x - 1; j <= cell.x + 1; j++) {
            if (grid[i] && grid[i][j] && grid[i][j].bug) {
              cell.proximity += 1;
            }
          }
        }
      }
    });
  });

  return grid;
};

export const revealGridRecursively = (
  x: number,
  y: number,
  grid: DebuggerCellData[][]
): DebuggerCellData[][] => {
  if (!grid[y] || !grid[y][x]) return grid;

  const clickedCell = grid[y][x];

  if (clickedCell.show) return grid;

  let newGrid = structuredClone(grid);
  newGrid[y][x].show = true;

  if (!clickedCell.proximity) {
    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if (newGrid[i] && newGrid[i][j] && newGrid[y][x].id !== newGrid[i][j].id) {
          newGrid = revealGridRecursively(j, i, newGrid);
        }
      }
    }
  }

  return newGrid;
};

export const revealBugs = (grid: DebuggerCellData[][]) => {
  const newGrid = structuredClone(grid);

  newGrid.forEach((row: DebuggerCellData[]) => {
    row.forEach((cell: DebuggerCellData) => {
      if (cell.bug) cell.show = true;
    });
  });

  return newGrid;
};
