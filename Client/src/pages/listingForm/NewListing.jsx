import  { useState } from 'react';
import './NewListing.css'

const NewListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleAmenitiesChange = (e) => {
    const selectedAmenities = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setAmenities(selectedAmenities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    // Reset the form fields if needed
    setTitle('');
    setDescription('');
    setPrice('');
    setLocation('');
    setImages([]);
    setAmenities([]);
  };

  return (
    <form onSubmit={handleSubmit} className='newlistingform'>
      <h1>Property Form</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="amenities">Amenities:</label>
        <select
          id="amenities"
          multiple
          onChange={handleAmenitiesChange}
        >
          <option value="swimming-pool">Swimming Pool</option>
          <option value="gym">Gym</option>
          <option value="parking">Parking</option>
          <option value="balcony">Balcony</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewListing;
