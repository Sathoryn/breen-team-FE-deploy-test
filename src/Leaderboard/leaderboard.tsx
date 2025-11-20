import Navigator from "../Home/Navigator/navigator";
import ScoreCard from "./scoreCard";

const Leaderboard = () => {
  return (
    <main className="leaderboard-main-container">
      <h1>Leaderboard</h1>
      <ScoreCard />
      <Navigator />
    </main>
  );
};

export default Leaderboard;
