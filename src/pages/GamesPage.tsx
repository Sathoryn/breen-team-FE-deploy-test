import Nav from '../components/Nav/Nav';
import HomeButton from '../components/HomeButton/HomeButton';
import './GamesPage.css';

const GamesPage = () => {
  return (
    <main className='games'>
      <h1 className='games__title'>Games</h1>
      <HomeButton to='/orcoftherings'>Orc of the Rings</HomeButton>
      <HomeButton to='/debugger'>Debugger</HomeButton>
      <Nav />
    </main>
  );
};

export default GamesPage;
