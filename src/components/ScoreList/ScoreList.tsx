import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreList.css';

const mockScores = [
  { score_id: 1, score: 50, username: 'BHS' },
  { score_id: 2, score: 72, username: 'KLM' },
  { score_id: 3, score: 18, username: 'QRT' },
  { score_id: 4, score: 91, username: 'ZXP' },
  { score_id: 5, score: 44, username: 'MJN' },
  { score_id: 6, score: 63, username: 'TUV' },
  { score_id: 7, score: 27, username: 'WQH' },
  { score_id: 8, score: 85, username: 'RDK' },
  { score_id: 9, score: 39, username: 'FLS' },
  { score_id: 10, score: 58, username: 'CPV' }
];

const ScoreList = () => {
  return (
    <ul className='scoreList'>
      {mockScores.map((score, i) => (
        <ScoreRow score={score} rank={i + 1} key={score.score_id} />
      ))}
    </ul>
  );
};

export default ScoreList;
