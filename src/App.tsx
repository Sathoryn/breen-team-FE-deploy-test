import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage';
import GamesPage from './pages/GamesPage';
import Debugger from './components/Debugger/Debugger';
import Runner from './components/Runner/Runner';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/leaderboards' element={<LeaderboardPage />} />
      <Route path='/games' element={<GamesPage />} />
      <Route path='/debugger' element={<Debugger />} />
      <Route path='/orcoftherings' element={<Runner />} />
    </Routes>
  );
};

export default App;
