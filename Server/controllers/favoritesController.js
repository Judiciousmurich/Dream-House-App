import sql from 'mssql';
import config from '../db/config.js';
//Favorites

// Get all favorites from all users
export const getFavorites = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Favorites');

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving all favorites... ${error.message}` });
  } finally {
    sql.close();
  }
};



// Get a specific favorite by ID
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


// Add a listing to a user's favorites
export const createFavorite = async (req, res) => {
  const { userId, listingId } = req.params;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .input('listingId', sql.Int, listingId)
      .query('INSERT INTO Favorites (user_id, listing_id) VALUES (@userId, @listingId)');

    res.status(201).json({ message: 'Favorite added successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while adding the favorite... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Remove a listing from a user's favorites
export const deleteFavorite = async (req, res) => {
  const { userId, listingId } = req.params;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .input('listingId', sql.Int, listingId)
      .query('DELETE FROM Favorites WHERE user_id = @userId AND listing_id = @listingId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Favorite not found' });
    } else {
      res.status(200).json({ message: 'Favorite removed successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while removing the favorite... ${error.message}` });
  } finally {
    sql.close();
  }
};