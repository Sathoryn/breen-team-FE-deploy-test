import HomeButton from '../components/HomeButton/HomeButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='homePage'>
      <HomeButton to='/game' animate>
        Go to game
      </HomeButton>
      <HomeButton to='/leaderboard'>View Leaderboard</HomeButton>
    </main>
  );
};

export default HomePage;
