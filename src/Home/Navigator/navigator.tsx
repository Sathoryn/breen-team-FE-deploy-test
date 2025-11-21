import { Link } from "react-router";

const Navigator = () => {
  return (
    <nav className="navigator-main-container">
      <Link to={"/"}>Home</Link>
      <Link to={"/leaderboard"}>Leaderboard</Link>
      <Link to={"/game"}>Game</Link>
    </nav>
  );
};

export default Navigator;
