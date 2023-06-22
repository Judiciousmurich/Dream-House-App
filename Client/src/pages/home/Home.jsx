import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  return (
  <main className="home-container" id="home">
    <div className="home-text">
      <h1>Modern House <br/>Make Better life</h1>
      <p>Search for apartments, houses and rooms in your area.<br/>Browse, customize, and visualize your dream house effortlessly</p>
      
      <Link to="/search"><button type="submit" className='btn-home'>Get Started!</button></Link>
  

    </div>
  </main>
  )
}

export default Home