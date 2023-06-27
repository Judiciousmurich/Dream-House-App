
import productImage1 from '../images/feature5.jpg';
import productImage2 from '../images/feature4.jpg';
import productImage3 from '../images/floor_plan.png';
import productImage6 from '../images/feature6.jpg';
import roomIcon from '../images/room.png';
import washroomIcon from '../images/washroom.png';
import garageIcon from '../images/garage.png';
import './Product.css'

const Product = () => {
  return (
    <div>
      <div className="outer-slider">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src={productImage1} alt="Product Image" style={{height:'50vh',width:'50vw'}}/>
            <img src={productImage2} alt="Product Image" style={{height:'50vh',width:'50vw'}} />
          </div>
        
          <div className="item">
            <img src={productImage3} alt="Product Image" className='product-img1' style={{height:'50vh',width:'50vw'}} />
            <img src={productImage6} alt="Product Image"className='product-img1'style={{height:'50vh',width:'50vw'}}  />
            
          </div>
        
          {/* <div className="item">
            <img src={productImage1} alt="Product Image" />
          </div> */}
        </div>
      </div>
      <div className="product_info">
        <h2 style={{color:"black",  padding: "2rem 0rem", fontWeight:"bold",fontSize:"1.5rem"}}>Sophisticated Two Bedroom plus Study in Luxurious One30 Hyde Park</h2>
        <br />
        <h3>Location:</h3>
        <p>2202/130 Elizabeth Street, Sydney</p>
        <br />
        <p>
          Exuding sophisticated grandeur and timeless charm, this elegant
          two-bedroom plus study apartment boasts breathtaking views over Hyde
          Park, St Mary’s Cathedral, and the city skyline. Meticulously designed
          by Bates Smart architects, in a joint development between Aoyuan
          International and Ecove Group, ‘One30 Hyde Park’ showcases premium
          quality fixtures and fittings, mirrored by magnificent northern views
          and positioned in Sydney’s premium residential dress circle.
        </p>
        <h3>Defining Features</h3>
        <ul>
          <li>Glass encased interiors showcasing sweeping Harbour &amp; city views</li>
          <li>Spacious open plan living/dining drenched in northern light</li>
          <li>Glass encased interiors showcasing sweeping Harbour &amp; city views</li>
          <li>Spacious open plan living/dining drenched in northern light</li>
          <li>Glass encased interiors showcasing sweeping Harbour &amp; city views</li>
          <li>Spacious open plan living/dining drenched in northern light</li>
          <li>Glass encased interiors showcasing sweeping Harbour &amp; city views</li>
          <li>Spacious open plan living/dining drenched in northern light</li>
        </ul>
        <br />
        <br />
        <p>
          On behalf of the team at Boutique Property Agents and the owners of
          ‘Apartment 2202 One30 Hyde Park’, we look forward to welcoming you at
          one of our inspections. Alternatively, please contact Tolga on 0410
          888 939 to arrange a private inspection.
          <br />
          <br />
          Disclaimer: All information contained herewith, have been obtained
          from sources we believe to be reliable; however, we cannot guarantee
          its accuracy. The information contained herewith should not be relied
          upon and you should make your own enquiries and seek advice in respect
          of this property or any property on this website.
        </p>
        <br />
        <br />
        <div className="property_features">
          <h3>Property Features</h3>
          <div className="property_feature">
            <img src={roomIcon} height="50px" alt="Room Icon" />
            &nbsp;&nbsp;
            <h4>4 Bedrooms</h4>
          </div>
          <div className="property_feature">
            <img src={washroomIcon} height="50px" alt="Washroom Icon" />
            &nbsp;&nbsp;
            <h4>2 shower/Washroom</h4>
          </div>
          <div className="property_feature">
            <img src={garageIcon} height="50px" alt="Garage Icon" />
            &nbsp;&nbsp;
            <h4>2 shower/Washroom</h4>
          </div>
        </div>
        <div className="product_contact">
          <h3>Contact Owner</h3>
          <p>You need to <a href="/login">Login</a> first in order to schedule a visit.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
