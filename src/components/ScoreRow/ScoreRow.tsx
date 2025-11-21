import './ScoreRow.css';
import type { Score } from '../../types';

type ScoreRowProps = {
  score: Score;
  rank: number;
};

const ScoreRow = ({ score: { username, score }, rank }: ScoreRowProps) => {
  return (
    <li className='scoreRow'>
      <span className='scoreRow__rank'>{rank}.</span>
      <span className='scoreRow__username'>{username}</span>
      <span className='scoreRow__score'>{score}</span>
    </li>
  );
};

export default ScoreRow;
