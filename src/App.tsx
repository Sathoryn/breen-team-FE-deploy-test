import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamePage from './pages/GamePage';
import Debugger from './components/Debugger/Debugger';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/leaderboard' element={<LeaderboardPage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='/debugger' element={<Debugger />} />
    </Routes>
  );
};

export default App;
