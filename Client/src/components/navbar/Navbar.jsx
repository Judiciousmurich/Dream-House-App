
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
// import { useContext } from 'react';
// import { Context } from '../../context/Context';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (

    <header>
      <Link to="/" className="logo">DreamHouse</Link>
      <nav className="navbar">

        {
          user && <NavLink to="/" >

            Home
          </NavLink>
        }
        {
          user && <NavLink to="/about">
            About
          </NavLink>
        }
        {
          user && <NavLink to="/buy">
            Buy
          </NavLink>
        }{
          user && <NavLink to="/newlisting">
            NewListingForm
          </NavLink>
        }
        {
          user && <NavLink to="/contact" >
            Contact Us
          </NavLink>

        }




        {
          !user && <NavLink to="/register" >
            Register
          </NavLink>}

      </nav>
      <div className="icons">
        {
          !user && <NavLink to="/login" className="btn">Login</NavLink>
        }
        <i className="fas fa-bars" id="menu-bars"></i>
      </div>
    </header>

  );
};

export default Navbar;
