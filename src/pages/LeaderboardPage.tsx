import Nav from '../components/Nav/Nav';
import ScoreList from '../components/ScoreList/ScoreList';

const LeaderboardPage = () => {
  return (
    <main className='leaderboard'>
      <h1>Leaderboard</h1>
      <ScoreList />
      <Nav />
    </main>
  );
};

export default LeaderboardPage;
