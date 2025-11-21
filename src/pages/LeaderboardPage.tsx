import Nav from '../components/Nav/Nav';
import ScoreList from '../components/ScoreList/ScoreList';
import './LeaderboardPage.css';

const LeaderboardPage = () => {
  return (
    <main className='leaderboard'>
      <h1 className='leaderboard__title'>Leaderboard</h1>
      <ScoreList />
      <button className='leaderboard_button'>Next</button>
      <Nav />
    </main>
  );
};

export default LeaderboardPage;
