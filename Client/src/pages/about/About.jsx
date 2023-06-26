
import { Link } from "react-router-dom";
import profile1 from "../images/agent 1.jpg";
import profile2 from "../images/agent 2.jpg";
import goalImage from "../images/goal.png";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div>
      <div className="about_banner">
        <div>
          <h1>About Us</h1>
          <i>
            <Link to="/">Home</Link> / About Us
          </i>
        </div>
      </div>
      <div className="goals_info">
        <div className="goals">
          <h2>Our Goals</h2>
          <p>
            We are providing free real estate marketplace for your house and
            property where anyone can buy and sell their property without
            searching for a broker.
          </p>
          <p>&#10004; &nbsp; Provide Free Marketplace for your Real Estate</p>
          <p>&#10004; &nbsp; No middleman between Buyers and sellers.</p>
          <p>&#10004; &nbsp; Improve customer satisfaction through better service</p>
          <p>&#10004; &nbsp; Update the outdated way of doing real estate business</p>
          <p>&#10004; &nbsp; Provide easy interface to users</p>
          <p>&#10004; &nbsp; Help customer find their desired property</p>
        </div>
        <div className="goal_img">
          <img src={goalImage} alt="Goal" />
        </div>
      </div>
      <div className="member_infos">
        <h1>Who are we?</h1>
        <div className="member_info">
          <div className="user">
            <img src={profile1} className="img" alt="Profile 1" />
            <div>
              <h2>lello Bikeyo</h2>
              <p>FrontEnd Developer</p>
              <p>
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </p>
            </div>
          </div>
          <div className="user">
            <img src={profile2} className="img" alt="Profile 2" />
            <div>
              <h3>Judicious Murich</h3>
              <p>Backend Developer</p>
              <p>
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
