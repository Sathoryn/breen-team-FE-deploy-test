export type Score = {
  score_id: number;
  username: string;
  score: number;
};

export type MinesweeperCellData = {
  id: number;
  x: number;
  y: number;
  show: boolean;
  bug: boolean;
  proximity: number;
  flag: boolean;
};
