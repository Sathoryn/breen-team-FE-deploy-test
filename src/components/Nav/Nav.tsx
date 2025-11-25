import './Nav.css';

import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className='nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/leaderboards'>Leaderboards</NavLink>
      <NavLink to='/games'>Games</NavLink>
    </nav>
  );
};

export default Nav;
