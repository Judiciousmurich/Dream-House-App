import Listings from '../../components/listing/Listing';
import './Home.css'


const Hero = () => {
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
    <div className="stats">
          <div>
            <h1>70+</h1>
            <p>Appartments</p>
          </div>
          <div>
            <h1>300+</h1>
            <p>Locations</p>
          </div>
          <div>
            <h1>550+</h1>
            <p>Happy Customers</p>
          </div>
          <div>
            <h1>100+</h1>
            <p>Properties Listed</p>
          </div>
        </div>
        <Listings/>

    </>


  
      )};

  
      
     
    
export default Hero ;
