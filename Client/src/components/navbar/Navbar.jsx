import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [navList, setNavList] = useState(false);

  return (
    <nav>
      <div className="container flex">
        <div className="logo">
          <img src="./images/logo.jpg" alt="" />
        </div>
        <div className="nav">
          <ul className={navList ? 'small' : 'flex'}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="button flex">
          <h4>
            <span>2</span> My List
          </h4>
          <button className="btn1">
            <i className="fa fa-sign-out"></i> Sign In
          </button>
        </div>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
