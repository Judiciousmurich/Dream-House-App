import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
   
    window.location.href = '/login';
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <Link to="/" className="logo">
        DreamHouse
      </Link>
      <nav className="navbar">
        {user && (
          <>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/about" className="link">
              About
            </NavLink>
            <NavLink to="/buy" className="link">
              Buy
            </NavLink>
            <NavLink to="/newlisting" className="link">
              NewListingForm
            </NavLink>
            <NavLink to="/contact" className="link">
              Contact Us
            </NavLink>
        
            
          </>
        )}
        {!user && (
          <NavLink to="/register" className="link">
            Register
          </NavLink>
        )}
      </nav>
      <div className="icons">
        {!user && (
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        )}
        {user && (
          <button className="btn" onClick={handleLogout} style={{fontSize:"1rem"}}>
            Logout
          </button>
        )}
        <i className="fas fa-bars" id="menu-bars"></i>
      </div>
    </header>
  );
};

export default Navbar;
