import { Routes, Route } from "react-router";
import Home from "./Home/home";
import Leaderboard from "./Leaderboard/leaderboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App;
