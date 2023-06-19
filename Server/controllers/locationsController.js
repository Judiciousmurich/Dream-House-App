import sql from 'mssql';
import config from '../db/config.js';

// Locations
// Fetch all locations
export const getLocations = async (req, res) => {
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request().query('SELECT * FROM Locations');
  
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ error: `An error occurred while retrieving locations... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
  // Fetch a specific location by ID
  export const getLocationById = async (req, res) => {
    const locationId = req.params.id;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('locationId', sql.Int, locationId)
        .query('SELECT * FROM Locations WHERE id = @locationId');
  
      if (!result.recordset[0]) {
        res.status(404).json({ message: 'Location not found' });
      } else {
        res.status(200).json(result.recordset[0]);
      }
    } catch (error) {
      res.status(500).json({ error: `An error occurred while retrieving the location... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
  // Create a new location
  export const createLocation = async (req, res) => {
    const { city, neighborhood, region } = req.body;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('city', sql.VarChar, city)
        .input('neighborhood', sql.VarChar, neighborhood)
        .input('region', sql.VarChar, region)
        .query('INSERT INTO Locations (city, neighborhood, region) VALUES (@city, @neighborhood, @region)');
  
      res.status(201).json({ message: 'Location created successfully' });
    } catch (error) {
      res.status(500).json({ error: `An error occurred while creating the location... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
  // Update a location by ID
  export const updateLocation = async (req, res) => {
    const locationId = req.params.id;
    const { city, neighborhood, region } = req.body;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('locationId', sql.Int, locationId)
        .input('city', sql.VarChar, city)
        .input('neighborhood', sql.VarChar, neighborhood)
        .input('region', sql.VarChar, region)
        .query('UPDATE Locations SET city = @city, neighborhood = @neighborhood, region = @region WHERE id = @locationId');
  
      res.status(200).json({ message: 'Location updated successfully' });
    } catch (error) {
      res.status(500).json({ error: `An error occurred while updating the location... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
  // Delete a location
  export const deleteLocation = async (req, res) => {
    const locationId = req.params.id;
  
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request()
        .input('locationId', sql.Int, locationId)
        .query('DELETE FROM Locations WHERE id = @locationId');
  
      if (result.rowsAffected[0] === 0) {
        res.status(404).json({ message: 'Location not found' });
      } else {
        res.status(200).json({ message: 'Location deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ error: `An error occurred while deleting the location... ${error.message}` });
    } finally {
      sql.close();
    }
  };