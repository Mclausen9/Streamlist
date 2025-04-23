import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1><i className="fas fa-tv"></i> StreamList</h1>
      <ul className="nav-links">
        <li><a href="#streamlist">Home</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
