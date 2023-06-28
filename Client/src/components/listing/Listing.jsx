import { Link } from 'react-router-dom';
import featuredImage1 from '../../pages/images/feature10.jpg';
import './Listing.css';
import Cards from '../cards/Cards';

const Listings = () => {
  return (
    <div className="featured_listing">
      <h1>Our Featured Listings</h1>
      <div className="card">
       
        
        <Cards />
      </div>
      <div className="featured_btn">
        <Link to="/about" className="btn">Read More</Link>
      </div>
    </div>

  );
};

export default Listings;
