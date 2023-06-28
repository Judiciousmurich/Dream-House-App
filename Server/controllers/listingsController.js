import sql from 'mssql';
import config from '../db/config.js';

// Get all listings
export const getListings = async (req, res) => {
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request().query('SELECT * FROM Listings');
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ error: `An error occurred while retrieving listings... ${error.message}` });
    } finally {
      sql.close(); // Close the SQL connection
    }
  };
  
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++=
  // Get a single listing by ID
  export const getListingById = async (req, res) => {
    const listingId = req.params.id;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('listingId', sql.Int, listingId)
        .query('SELECT * FROM Listings WHERE id = @listingId');
  
      if (!result.recordset[0]) {
        res.status(404).json({ message: 'Listing not found' });
      } else {
        res.status(200).json(result.recordset[0]);
      }
    } catch (error) {
      res.status(500).json({ error: `An error occurred while retrieving the listing... ${error.message}` });
    } finally {
      sql.close(); // Close the SQL connection
    }
  };
  
  
  // Create a new listing
  export const createListing = async (req, res) => {
    const { title, description, price, location, images, amenities } = req.body;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('title', sql.VarChar, title)
        .input('description', sql.VarChar, description)
        .input('price', sql.Decimal, price)
        .input('location', sql.VarChar, location)
        .input('images', sql.VarChar, images)
        .input('amenities', sql.VarChar, amenities)
        .query('INSERT INTO Listings (title, description, price, location, images, amenities) VALUES (@title, @description, @price, @location, @images, @amenities)');
  
      res.status(201).json({ message: 'Listing created successfully' });
    } catch (error) {
      res.status(500).json({ error: `An error occurred while creating the listing... ${error.message}` });
    } finally {
      sql.close(); // Close the SQL connection
    }
  };
  
  // Update a listing
  export const updateListing = async (req, res) => {
    const listingId = req.params.id;
    const { title, description, price, location, images, amenities } = req.body;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('listingId', sql.Int, listingId)
        .input('title', sql.VarChar, title)
        .input('description', sql.VarChar, description)
        .input('price', sql.Decimal, price)
        .input('location', sql.VarChar, location)
        .input('images', sql.VarChar, images)
        .input('amenities', sql.VarChar, amenities)
        .query('UPDATE Listings SET title = @title, description = @description, price = @price, location = @location, images = @images, amenities = @amenities WHERE id = @listingId');
  
      res.status(200).json({ message: 'Listing updated successfully' });
    } catch (error) {
      res.status(500).json({ error: `An error occurred while updating the listing... ${error.message}` });
    } finally {
      sql.close(); // Close the SQL connection
    }
  };
  
  // Delete a listing
  export const deleteListing = async (req, res) => {
    try {
      const { id } = req.params;
      let pool = await sql.connect(config.sql);
  
      // Delete related inquiries
      await pool.request()
        .query(`DELETE FROM Inquiries WHERE listing_id = ${id}`);
  
      // Delete the listing
      const result = await pool.request()
        .query(`DELETE FROM Listings WHERE id = ${id}`);
  
      if (result.rowsAffected[0] === 0) {
        res.status(404).json({ message: 'Listing not found' });
      } else {
        res.status(200).json({ message: 'Listing deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: `An error occurred while deleting the listing... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
// Search listings by keyword