
import img from '../images/about.jpg';
import './About.css';

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <h1 className='title'>About Us - Who We Are?</h1>
            <p className='subtitle'>Check out our company story and work process</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img} alt='About Us' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
