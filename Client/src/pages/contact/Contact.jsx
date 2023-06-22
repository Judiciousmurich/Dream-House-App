import  { useState, useEffect } from 'react';
import './Contact.css'
const Contact = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch locations data from the backend API
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <p className="subtitle">Get in touch with us</p>

      <h2>Our Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>

      <p>
        For any inquiries or questions, please contact us at <strong>info@example.com</strong>.
      </p>
    </div>
  );
};

export default Contact;
