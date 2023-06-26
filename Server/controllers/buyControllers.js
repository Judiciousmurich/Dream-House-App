import sql from 'mssql';
import config from '../db/config.js';
// Get all available listings
export const getAvailableListings = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Listings WHERE is_available = 1');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving available listings... ${error.message}` });
  } finally {
    sql.close();
  }
};
