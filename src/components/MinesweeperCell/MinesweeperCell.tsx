import './MInesweeperCell.css';

type MinesweeperCellProps = {
  value: null | 'X';
};

const MinesweeperCell = ({ value }: MinesweeperCellProps) => {
  return <div className='minesweeperCell'>{value}</div>;
};

export default MinesweeperCell;
