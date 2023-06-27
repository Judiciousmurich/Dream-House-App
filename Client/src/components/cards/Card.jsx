import { Link } from 'react-router-dom';
import featuredImage1 from '../../pages/images/feature12.jpg';

const Card = ({ listing }) => {
  return (
    <div className="featured_listing_card">
      <img src={featuredImage1} alt="Property 1" />
      <div className="featured_listing_card_info">
        <div className="property_title">
          <Link to="/">{listing.title}</Link>
          <h2 className='price'>${listing.price}</h2>
        </div>
        <p>{listing.description}</p>
        <hr />
        <p>{listing.amenities}</p>
        <hr />
        <p>{listing.location}</p>

      </div>
    </div>
  )
}

export default Card;