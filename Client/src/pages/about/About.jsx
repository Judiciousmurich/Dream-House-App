import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { apiDomain } from "../../utils/utilsDomain";
import { useEffect, useState } from "react";


import profile2 from "../images/agent 2.jpg";
import profile3 from "../images/agent 3.jpg";
import profile4 from "../images/agent 5.jpg";
import profile5 from "../images/agent 6.jpg";
import profile6 from "../images/agent 7.jpg";
import profile7 from "../images/agent 9.jpg";
import profile8 from "../images/agent 10.jpg";
import profile9 from "../images/agent 11.jpg";
import profile10 from "../images/agent 11.jpg";




const agentImages = [ profile2, profile3, profile4, profile5, profile6, profile7,profile8,profile9,profile10];
// Add more agent profile images to the array as needed

const AboutPage = () => {
  const [agents, setAgents] = useState([]);

  const getAgents = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`${apiDomain}/agents`, {
        headers: { Authorization: `${token}` },
      });
      const data = await res.json();
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

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

      <div className="member_infos">
        <h1>Who are we?</h1>
        <div className="member_info">
          {agents &&
            agents.map((agent, index) => (
              <div className="user" key={agent.id}>
                <img src={agentImages[index % agentImages.length]} className="img" alt={`Profile ${agent.id}`} />
                <div>
                <h3>{agent.profile_info}</h3><br/>
                  <h3>{agent.email}</h3><br/>
                  <h3>{agent.name}</h3><br/>
                  <p>{agent.contact_number}</p><br/>
              

                  <p>
                    <i className="fa fa-twitter"><FaTwitter/></i>
                    <i className="fa fa-instagram"><FaInstagram/></i>
                    <i className="fa fa-linkedin"><FaLinkedin/></i>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
