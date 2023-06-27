
import notFoundImage from '../images/404_img.png';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="e404_info">
      <div>
        <img src={notFoundImage} alt="404" />
        <h1>It Seems like this Page doesn't Exist.</h1>
        <p>Return to</p>
        <a href="/" className="btn">Home</a>
      </div>
    </div>
  );
};

export default NotFound;
