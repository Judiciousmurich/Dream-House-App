
import backgroundImage from '../images/home-1.jpg';
import './Home.css';

const Home = () => {
  return (
    <section className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="title">MODERN HOUSE</h1>
        <p className="subtitle">MAKE BETTER LIFE</p>
        <p className="description">Discover your perfect home with the Dream House app. Browse, customize, and visualize your dream house effortlessly..</p>
        <button className="btn">Learn More </button>
      </div>
    </section>
  );
}

export default Home;
