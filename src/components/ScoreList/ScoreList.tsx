import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreList.css';

const ScoreList = () => {
  return (
    <ul className='scoreList'>
      <h2 className='scoreList__title'>Score List</h2>
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
      <ScoreRow score={0} username='player' score_id={0} />
    </ul>
  );
};

export default ScoreList;
