import React from 'react';
import { NavLink } from 'react-router-dom';
import useDarkMode  from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <NavLink exact to='/'         activeClassName="activeNavButton" className="navLink" >
        Home
      </NavLink>
      <NavLink to='/charts-page' activeClassName="activeNavButton" className="navLink" >Charts</NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
