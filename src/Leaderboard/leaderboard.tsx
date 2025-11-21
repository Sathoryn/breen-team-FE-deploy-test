import Navigator from "../Home/Navigator/navigator";
import ScoreList from "./scoreList";

const Leaderboard = () => {
  return (
    <main className="leaderboard-main-container">
      <h1>Leaderboard</h1>
      <ScoreList />
      <Navigator />
    </main>
  );
};

export default Leaderboard;
