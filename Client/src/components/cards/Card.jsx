import { Link, useNavigate } from 'react-router-dom';
import featuredImage1 from '../../pages/images/feature1.jpg';
import featuredImage2 from '../../pages/images/feature2.jpg';
import featuredImage3 from '../../pages/images/sitting.jpg';
import featuredImage4 from '../../pages/images/feature4.jpg';
import featuredImage5 from '../../pages/images/feature5.jpg';
import featuredImage6 from '../../pages/images/feature6.jpg';
import featuredImage7 from '../../pages/images/about_2.jpg';
import featuredImage8 from '../../pages/images/home-1.jpg';
import featuredImage9 from '../../pages/images/feature9.jpg';
import featuredImage10 from '../../pages/images/nice-home.jpg';
import featuredImage11 from '../../pages/images/agent.jpg';
import featuredImage12 from '../../pages/images/feature12.jpg';
import featuredImage13 from '../../pages/images/sitting-2.jpg';



const images = [featuredImage1, featuredImage2, featuredImage3, featuredImage4, featuredImage5, featuredImage6, featuredImage7, featuredImage8, featuredImage9, featuredImage10, featuredImage11, featuredImage12, featuredImage13];


const Card = ({ listing }) => {
  const navigate = useNavigate();
  const seeMoreDetails = (id) => {
    navigate('/details/' + id);
  };
  const updateListing = (id) => {
    navigate("/update/" + id)
  }
  return (
    <div className="featured_listing_card" >
      <img src={images[listing.id - 25]} alt={`Property ${listing.id}`} onClick={() => seeMoreDetails(listing.id)} />
      <div className="featured_listing_card_info" >
        <div className="property_title">
          <Link to="/">{listing.title}</Link>
          <h2 className='price'>${listing.price}</h2>

        </div>
      </div>
      <div>
        <button onClick={() => updateListing(listing.id)}>Update</button>
      </div>
    </div>

  );
};

export default Card;
