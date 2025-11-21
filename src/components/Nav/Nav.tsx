import './Nav.css';

import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/leaderboard'>Leaderboard</NavLink>
      <NavLink to='/game'>Game</NavLink>
    </nav>
  );
};

export default Nav;
