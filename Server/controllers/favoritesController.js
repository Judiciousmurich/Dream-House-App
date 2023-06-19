import sql from 'mssql';
import config from '../db/config.js';

// Get all favorites
export const getFavorites = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Favorites');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving favorites... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Get a single favorite by ID
export const getFavoriteById = async (req, res) => {
  const favoriteId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('favoriteId', sql.Int, favoriteId)
      .query('SELECT * FROM Favorites WHERE id = @favoriteId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Favorite not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the favorite... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Create a new favorite
export const createFavorite = async (req, res) => {
  const { userId, listingId } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .input('listingId', sql.Int, listingId)
      .query('INSERT INTO Favorites (user_id, listing_id) VALUES (@userId, @listingId)');

    res.status(201).json({ message: 'Favorite created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the favorite... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};


// Update a favorite
export const updateFavorite = async (req, res) => {
  const favoriteId = req.params.id;
  const { userId, listingId } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('favoriteId', sql.Int, favoriteId)
      .input('userId', sql.Int, userId)
      .input('listingId', sql.Int, listingId)
      .query('UPDATE Favorites SET user_id = @userId, listing_id = @listingId WHERE id = @favoriteId');

    res.status(200).json({ message: 'Favorite updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the favorite... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};


// Delete a favorite
export const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await sql.connect(config.sql);

    const result = await pool.request()
      .input('favoriteId', sql.Int, id)
      .query('DELETE FROM Favorites WHERE id = @favoriteId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Favorite not found' });
    } else {
      res.status(200).json({ message: 'Favorite deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the favorite... ${error.message}` });
  } finally {
    sql.close();
  }
};
