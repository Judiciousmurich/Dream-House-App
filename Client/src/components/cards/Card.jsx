import { Link, useNavigate } from 'react-router-dom';
import featuredImage1 from '../../pages/images/feature12.jpg';

const Card = ({ listing }) => {
  const navigate = useNavigate()
  const seeMoreDetails = (id) =>{
    navigate('/details/'+ id)
  }
  return (
    <div className="featured_listing_card" onClick={()=> seeMoreDetails(listing.id)}>
      <img src={featuredImage1} alt="Property 1" />
      <div className="featured_listing_card_info">
        <div className="property_title">
          <Link to="/">{listing.title}</Link>
          <h2 className='price'>${listing.price}</h2>
        </div>
      
      

      </div>
    </div>
  )
}

export default Card;