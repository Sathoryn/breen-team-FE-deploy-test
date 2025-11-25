import classNames from 'classnames';
import { IoBugSharp, IoFlag } from 'react-icons/io5';
import type { SyntheticEvent } from 'react';
import type { DebuggerCellData } from '../../types';
import './DebuggerCell.css';

type DebuggerCellProps = {
  cell: DebuggerCellData;
  leftClickHandler: (x: number, y: number) => void;
  rightClickHandler: (e: SyntheticEvent, x: number, y: number) => void;
};

const MinesweeperCell = ({
  cell: { x, y, show, bug, flag, proximity },
  leftClickHandler,
  rightClickHandler,
  ...rest
}: DebuggerCellProps) => {
  const cellClasses = classNames({
    minesweeperCell: true,
    show,
    bug
  });
  return (
    <div
      className={cellClasses}
      onClick={() => leftClickHandler(x, y)}
      onContextMenu={e => rightClickHandler(e, x, y)}
      {...rest}
    >
      {bug && <IoBugSharp className='bug' />}
      {proximity > 0 && <span className={`proximity${proximity}`}>{proximity}</span>}
      {flag && <IoFlag className='flag' />}
    </div>
  );
};

export default MinesweeperCell;
