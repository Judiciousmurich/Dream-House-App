import { FaPhone, FaTwitter, FaInstagram , FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="footer_info">
          <h2>Realestate</h2>
          <p>judicous</p>
          <p>Admin@realestate.com</p>
          <a href="tel-phone">
          <i><FaPhone /></i> (+254) 9824386853
          </a>
        </div>
        <div className="footer_link">
          <h2>Links</h2>
          <div className="link_column">
         
              
            <div>
              <Link to="/about">About </Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
        <div className="footer_newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              className="email"
              placeholder="Enter your e-mail"
            />
            <button type="submit" className='button'>Subscribe</button>
          </label>
          <div>
            <input type="checkbox" name="checkbox" className="term" /> I have read and agree to the{' '}
            <Link to="">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer_secondary">
        <p>Realestate &copy; 2023. All rights reserved.</p>
        <p>
            <i><FaTwitter /></i>
          <i><FaInstagram /></i>
            <i> <FaLinkedin /></i>
        
        </p>
    
      </div>
    </footer>
  );
};

export default Footer;
