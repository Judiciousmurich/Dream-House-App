import featuredImage1 from '../../pages/images/feature12.jpg';
import './card.css'

const Card = ({house}) => {
  return (
<div className="featured_listing">
      <div className="card">
        <div className="featured_listing_card">
          <img src={featuredImage1} alt="Featured Listing" />
          <div className="featured_listing_card_info">
            <div className="property_title">
              <a href="#">{house.title}</a>
              <h2 className='price'>${house.price}</h2>
            </div>
            <p>{house.description}</p>
            <p>{house.amenities}</p>
            <hr />
            <p>{house.location}</p>
          </div>
        </div>
      </div>
      </div> 
       )
}

export default Card;