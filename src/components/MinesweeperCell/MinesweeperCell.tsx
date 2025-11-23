import classNames from 'classnames';
import { IoBugSharp, IoFlag } from 'react-icons/io5';
import type { SyntheticEvent } from 'react';
import type { MinesweeperCellData } from '../../types';
import './MinesweeperCell.css';

type MinesweeperCellProps = {
  cell: MinesweeperCellData;
  leftClickHandler: (x: number, y: number) => void;
  rightClickHandler: (e: SyntheticEvent, x: number, y: number) => void;
};

const MinesweeperCell = ({
  cell: { x, y, show, bug, flag },
  leftClickHandler,
  rightClickHandler,
  ...rest
}: MinesweeperCellProps) => {
  const cellClasses = classNames({
    minesweeperCell: true,
    show
  });
  return (
    <div
      className={cellClasses}
      onClick={() => leftClickHandler(x, y)}
      onContextMenu={e => rightClickHandler(e, x, y)}
      {...rest}
    >
      {flag && <IoFlag />}
      {bug && <IoBugSharp />}
    </div>
  );
};

export default MinesweeperCell;
