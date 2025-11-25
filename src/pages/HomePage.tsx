import HomeButton from '../components/HomeButton/HomeButton';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className='homePage'>
      <HomeButton to='/games' animate>
        View Games
      </HomeButton>
      <HomeButton to='/leaderboards'>View Leaderboards</HomeButton>
    </main>
  );
};

export default HomePage;
