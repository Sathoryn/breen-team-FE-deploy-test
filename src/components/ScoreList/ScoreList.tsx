import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getScores } from '../../api';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import ScoreRow from '../ScoreRow/ScoreRow';
import './ScoreList.css';

const ScoreList = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['scores'],
    queryFn: getScores
  });

  if (isLoading) {
    return <Loading>Loding scores</Loading>;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <ul className='scoreList'>
      {data.scores.map((score, i) => (
        <ScoreRow score={score} rank={i + 1} key={score.score_id} />
      ))}
    </ul>
  );
};

export default ScoreList;
