import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamePage from './pages/GamePage';
import Minesweeper from './components/Minesweeper/Minesweeper';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/leaderboard' element={<LeaderboardPage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='/minesweeper' element={<Minesweeper />} />
    </Routes>
  );
};

export default App;
