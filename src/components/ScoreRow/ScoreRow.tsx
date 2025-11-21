import './ScoreRow.css';
import type { ScoreRowTypes } from '../../utils/dataTypes';

const ScoreRow = () => {
  const scoreRow: ScoreRowTypes[] = [];
  return (
    <div className='scoreRow'>
      {scoreRow.map(score => (
        <li>
          <p>{score.username}</p>
          <p>{score.score}</p>
        </li>
      ))}
    </div>
  );
};

export default ScoreRow;
