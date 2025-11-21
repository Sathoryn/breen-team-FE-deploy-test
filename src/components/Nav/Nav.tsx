import './Nav.css';

import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
      <Link to='/game'>Game</Link>
    </nav>
  );
};

export default Nav;
