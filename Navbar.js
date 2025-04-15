import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // <-- Import your custom CSS here

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>StreamList</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
