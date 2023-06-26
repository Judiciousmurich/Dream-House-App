
import { Link } from "react-router-dom";

import profile2 from "../images/agent 2.jpg";
import goalImage from "../images/goal.png";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { apiDomain } from "../../utils/utilsDomain";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [agents, setAgents] = useState([])

  const getAgents = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"))
      const res = await fetch(`${apiDomain}/agents`, {
        headers: { Authorization: `${token}` },
      });
      const data = await res.json()
      setAgents(data);
    } catch (error) {
      console.error("Error fetching availableListings:", error);
    }
  };
  useEffect(() => {
    getAgents()
  }, [])
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
            property where anyone can buy their property without
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

          {agents && agents.map((agent) => (
            <>
              <div className="user">
                <img src={profile2} className="img" alt="Profile 2" />
                <div>
                  <h3>{agent.email}</h3>
                  <h3>{agent.name}</h3>
                  <p>{agent.contact_number}</p>
                  <h3>{agent.profile_info}</h3>

                  <p>                    <p><i className="fa fa-twitter"><FaTwitter/></i><i className="fa fa-instagram"><FaInstagram/></i><i className="fa fa-linkedin"><FaLinkedin/></i></p>

                  </p>


                </div>
              </div>
            </>


          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
