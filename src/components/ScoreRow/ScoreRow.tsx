import './ScoreRow.css';
import type { Score } from '../../utils/dataTypes';

const ScoreRow = ({ score, username }: Score) => {
  return (
    <li className='scoreRow'>
      <p className='scoreRow__username'>{username}</p>
      <p className='scoreRow__score'>{score}</p>
    </li>
  );
};

export default ScoreRow;
