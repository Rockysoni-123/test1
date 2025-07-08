import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/">All News</Link>
      <div className="dropdown">
        <span>Top Headlines</span>
        <div className="dropdown-content">
          <Link to="/top-headlines/business">Business</Link>
          <Link to="/top-headlines/science">Science</Link>
          <Link to="/top-headlines/sports">Sports</Link>
        </div>
      </div>
      <div className="dropdown">
        <span>Country</span>
        <div className="dropdown-content">
          <Link to="/country/us">US</Link>
          <Link to="/country/in">India</Link>
        </div>
      </div>
      <button onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
