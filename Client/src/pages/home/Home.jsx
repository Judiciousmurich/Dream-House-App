// import Listings from '../../components/listing/Listing';
import './Home.css'
import Service from '../../components/service/Service ';
import Stats from '../../components/stats/Stats';

import Listings from '../../components/listing/Listing';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Rental from '../../components/rental/Rental';



const Hero = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    if (!user) {
      return navigate("/login")
    }
  }, [user])
  if (user) {
    return (
      <>
        <div className="hero">
          <div className="hero-info">
            <h1>Discover Your Real Estate</h1>
            <form>
              <input className="search" type="search" placeholder="Search Location, Apartments, Complex etc" aria-label="Search" />
              <i>
                <button className="btn" type="submit">Search</button>

              </i>
            </form>
          </div>

        </div>
        <Stats />
        <Service />
        <div className="container">
          <Listings />
        <Rental/>
        </div>


      </>



    )

  }

};





export default Hero;
