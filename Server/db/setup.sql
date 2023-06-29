-- Table for Users
CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at VARCHAR(255);
);
-- Create the Listing table
CREATE TABLE Listing (
  id INT IDENTITY(1,1) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(MAX),
  price DECIMAL(18,2),
  location VARCHAR(255),
  images VARCHAR(MAX),
  amenities VARCHAR(MAX),
  created_at DATETIME,
  is_available BIT
);

-- Insert 13 records into the Listing table
INSERT INTO Listing (title, description, price, location, images, amenities, created_at, is_available)
VALUES
  ('Luxury Villa', 'Beautiful villa with stunning ocean view', 1500000.00, 'Miami, Florida', 'villa1.jpg', 'Swimming pool, Gym, Garden', '2023-06-17 22:23:25.173', 1),
  ('Spacious Apartment', 'Modern apartment in the heart of the city', 500000.00, 'New York, New York', 'apartment1.jpg', 'Balcony, Fitness center, Parking', '2023-06-17 22:23:25.173', 1),
  ('Beachfront Condo', 'Elegant condo steps away from the beach', 800000.00, 'Los Angeles, California', 'condo1.jpg', 'Ocean view, Swimming pool, Security', '2023-06-17 22:23:25.173', 1),
  ('Luxury Penthouse', 'Stunning penthouse with panoramic city views', 2000000.00, 'Dubai, UAE', 'penthouse1.jpg', 'Infinity pool, Sky lounge, Concierge service', '2023-06-17 22:23:25.173', 1),
  ('Lakefront Property', 'Quaint house on the shores of a tranquil lake', 350000.00, 'Seattle, Washington', 'house2.jpg', 'Lake view, Boat dock, Outdoor living space', '2023-06-17 22:23:25.173', 1),
  ('Historic Mansion', 'Grand mansion showcasing rich architectural heritage', 3000000.00, 'London, England', 'mansion1.jpg', 'Formal gardens, Ballroom, Library', '2023-06-17 22:23:25.173', 1),
  ('Golf Course Villa', 'Elevated living on a scenic golf course', 600000.00, 'Phoenix, Arizona', 'villa2.jpg', 'Golf course view, Private pool, Tennis court', '2023-06-17 22:23:25.173', 1),
  ('Luxurious Villa', 'Luxury with stunning Oceanfront', 5000000.00, 'Malibu', 'villa3.jpg', 'Private beach access', '2023-06-19 11:41:19.410', 1),
  ('City Apartment', 'Modern apartment in the heart of downtown', 450000.00, 'Chicago, Illinois', 'apartment2.jpg', 'City views, Fitness center, Concierge', '2023-06-19 11:41:19.410', 1),
  ('Oceanfront Condo', 'Stylish condo overlooking the ocean', 700000.00, 'Miami Beach, Florida', 'condo2.jpg', 'Ocean view, Swimming pool, Beach access', '2023-06-19 11:41:19.410', 1),
  ('Hilltop Mansion', 'Exquisite mansion perched on a hilltop', 4000000.00, 'Beverly Hills, California', 'mansion2.jpg', 'Infinity pool, Home theater, Wine cellar', '2023-06-19 11:41:19.410', 1),
  ('Seaside Cottage', 'Charming cottage by the sea', 250000.00, 'Cape Cod, Massachusetts', 'house3.jpg', 'Ocean view, Outdoor patio, Fireplace', '2023-06-19 11:41:19.410', 1),
  ('Mountain Retreat', 'Cozy cabin nestled in the mountains', 300000.00, 'Aspen, Colorado', 'cabin1.jpg', 'Scenic views, Hot tub, Hiking trails', '2023-06-19 11:41:19.410', 1);

-- Table for Agents
CREATE TABLE Agents (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact_number VARCHAR(20),
  email VARCHAR(255),
  profile_info VARCHAR(MAX)
);

-- Insert records into the Agents table
INSERT INTO agents (id, name, contact_number, email, profile_info)
VALUES

  (2, 'Emily Johnson', '9876543210', 'emilyjohnson@example.com', 'Knowledgeable agent with expertise in city apartments.'),
  (4, 'Sophia Anderson', '1111111111', 'sophiaanderson@example.com', 'Reliable agent with extensive knowledge of the local real estate market.'),
  (5, 'William Davis', '9999999999', 'williamdavis@example.com', 'Friendly agent committed to providing excellent service.'),
  (6, 'Olivia Martinez', '7777777777', 'oliviamartinez@example.com', 'Skilled agent with a track record of successful property sales.'),
  (7, 'James Johnson', '8888888888', 'jamesjohnson@example.com', 'Expert agent specialized in luxury and golf course properties.'),
  (9, 'Daniel Wilson', '2222222222', 'danielwilson@example.com', 'Experienced agent with expertise in historic and heritage homes.'),
  (10, 'Sophia Davis', '6666666666', 'sophiadavis@example.com', 'Knowledgeable agent specializing in mountain and countryside properties.'),
  (12, 'joseph muit', '9900077', 'jose@gmail.com', 'nice agent');

--Table of Locations
CREATE TABLE Locations (
  id INT IDENTITY(1,1) PRIMARY KEY,
  city VARCHAR(255),
  neighborhood VARCHAR(255),
  region VARCHAR(255)
);

---- Insert records into the Locations table
INSERT INTO Locations (city, neighborhood, region)
VALUES
  ('Miami', 'South Beach', 'Florida'),
  ('New York', 'Manhattan', 'New York'),
  ('Cotswolds', 'Chipping Campden', 'England'),
  ('Los Angeles', 'Santa Monica', 'California'),
  ('Austin', 'Westlake Hills', 'Texas'),
  ('Denver', 'Cherry Creek', 'Colorado'),
  ('Dubai', 'Palm Jumeirah', 'UAE'),
  ('Seattle', 'Queen Anne', 'Washington'),
  ('London', 'Kensington', 'England'),
  ('Phoenix', 'Scottsdale', 'Arizona');




