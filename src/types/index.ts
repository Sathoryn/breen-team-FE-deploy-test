export type Score = {
  score_id: number;
  username: string;
  score: number;
};

export type MinesweeperCellData = {
  x: number;
  y: number;
  show: boolean;
  bug: boolean;
  clear: boolean;
  proximity: boolean;
  flag: boolean;
};
