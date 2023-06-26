
import { Link } from 'react-router-dom';
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
          user && <Link to="/" className='active' >

            Home
          </Link>
        }
        {
          user && <Link to="/about">
            About
          </Link>
        }
        {
          user && <Link to="/contact" >
            Contact Us
          </Link>

        }




      {
        !user &&<Link to="/register" >
          Register
        </Link>}

      </nav>
    <div className="icons">
     {
      !user && <Link to="/login" className="btn">Login</Link>
     } 
        <i className="fas fa-bars" id="menu-bars"></i>
      </div>
    </header>

  );
};

export default Navbar;
