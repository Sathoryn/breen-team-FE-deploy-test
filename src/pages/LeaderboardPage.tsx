import SquaresBackground from '../components/SquaresBackground/SquaresBackgrouond';
import Nav from '../components/Nav/Nav';
import ScoreList from '../components/ScoreList/ScoreList';
import Button from '../components/Button/Button';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  return (
    <>
      <SquaresBackground />
      <main className='leaderboard'>
        <h1 className='leaderboard__title'>Leaderboard</h1>
        <ScoreList />
        <Button>Load More Scores</Button>
        <Nav />
      </main>
    </>
  );
};

export default LeaderboardPage;
