import classNames from 'classnames';
import { IoBugSharp } from 'react-icons/io5';
import type { SyntheticEvent } from 'react';
import type { MinesweeperCellData } from '../../types';
import './MinesweeperCell.css';

type MinesweeperCellProps = {
  cell: MinesweeperCellData;
  clickHandler: (e: SyntheticEvent, x: number, y: number) => void;
};

const MinesweeperCell = ({
  cell: { x, y, show, bug },
  clickHandler,
  ...rest
}: MinesweeperCellProps) => {
  const cellClasses = classNames({
    minesweeperCell: true,
    show
  });
  return (
    <div className={cellClasses} onClick={e => clickHandler(e, x, y)} {...rest}>
      {bug && <IoBugSharp />}
    </div>
  );
};

export default MinesweeperCell;
