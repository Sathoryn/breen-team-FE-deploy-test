export type Score = {
  score_id: number;
  score: number;
  user_id: number;
  username: string;
  game_id: string;
  created_on: string;
};

export type DebuggerCellData = {
  id: number;
  x: number;
  y: number;
  show: boolean;
  bug: boolean;
  proximity: number;
  flag: boolean;
};
