import { Link } from 'react-router-dom';
import featuredImage1 from '../../pages/images/feature10.jpg';
import './Listing.css';
import Cards from '../cards/Cards';

const Listings = () => {
  return (
    <div className="featured_listing">
      <h1>Our Featured Listings</h1>
      <div className="card">
        { <div className="featured_listing_card">
          <img src={featuredImage1} alt="Featured Listing" />
          <div className="featured_listing_card_info">
            <div className="property_title">
              <a href="#">Sea Breeze</a>
              <h2 className='price'>$150,000</h2>
            </div>
            <p>House for families, Luxury</p>
            <p>Area: 76.87</p>
            <hr />
            <p>Dubai</p>
          </div>
        </div> }
        <Cards/>
      </div>
      <div className="featured_btn">
        <Link to="/about" className="btn">Read More</Link>
      </div>
      <Cards/>
      
    </div>

  );
};

export default Listings;
