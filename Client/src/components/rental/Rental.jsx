
import { Link } from "react-router-dom";
import rentalBannerImg from "../../pages/images/heroimg.jpg";
import "./Rental.css"; // Import the corresponding CSS file for styling if needed

const Rental = () => {
  return (
    <div className="rental_banner">
      <div className="rental_banner_img">
        <img src={rentalBannerImg} alt="Rental Banner" />
      </div>
      <div className="rental_banner_info">
        <h1>Stunning Luxury Rental Apartments</h1>
        <p>Luxury Apartments</p>
        <p>
          The property features many things that will suit any family: local
          community, schools, and daycares. Get surrounded by the stunning views
          opening around and enjoy the relaxed atmosphere of the place. At your
          disposal is a fantastic garden at the backyard of the house.
        </p>
        
        <Link to="/buy" className= "btn">View More</Link> 
      </div>
    </div>
  );
};

export default Rental;
