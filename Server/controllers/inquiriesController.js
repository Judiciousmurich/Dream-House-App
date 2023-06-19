import sql from 'mssql';
import config from '../db/config.js';


// Inquiries


// Get all inquiries
export const getInquiries = async (req, res) => {
    try {
      const pool = await sql.connect(config.sql);
      const result = await pool.request().query('SELECT * FROM Inquiries');
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ error: `An error occurred while retrieving inquiries... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
// Get a specific inquiry by ID
export const getInquiryById = async (req, res) => {
  const inquiryId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('inquiryId', sql.Int, inquiryId)
      .query('SELECT * FROM Inquiries WHERE id = @inquiryId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Inquiry not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the inquiry... ${error.message}` });
  } finally {
    sql.close();
  }
};
// Create a new inquiry
export const createInquiry = async (req, res) => {
    const { user_id, listing_id, message_content, additional_details } = req.body;
  
    try {
      const pool = await sql.connect(config.sql);
  
      // Check if the listing exists before creating the inquiry
      const listingResult = await pool.request()
        .input('listingId', sql.Int, listing_id)
        .query('SELECT id FROM Listings WHERE id = @listingId');
  
      if (!listingResult.recordset[0]) {
        // Listing not found, return an error response
        res.status(404).json({ error: 'Listing not found' });
        return;
      }
  
      // Create the inquiry
      const result = await pool.request()
        .input('user_id', sql.Int, user_id)
        .input('listing_id', sql.Int, listing_id)
        .input('message_content', sql.VarChar, message_content)
        .input('additional_details', sql.VarChar, additional_details)
        .query('INSERT INTO Inquiries (user_id, listing_id, message_content, additional_details) VALUES (@user_id, @listing_id, @message_content, @additional_details)');
  
      res.status(201).json({ message: 'Inquiry created successfully' });
    } catch (error) {
      res.status(500).json({ error: `An error occurred while creating the inquiry... ${error.message}` });
    } finally {
      sql.close();
    }
  };
  
// Update an inquiry
export const updateInquiry = async (req, res) => {
  const inquiryId = req.params.id;
  const { messageContent, additionalDetails } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('inquiryId', sql.Int, inquiryId)
      .input('messageContent', sql.VarChar, messageContent)
      .input('additionalDetails', sql.VarChar, additionalDetails)
      .query('UPDATE Inquiries SET message_content = @messageContent, additional_details = @additionalDetails WHERE id = @inquiryId');

    res.status(200).json({ message: 'Inquiry updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the inquiry... ${error.message}` });
  } finally {
    sql.close();
  }
};

// Delete an inquiry
export const deleteInquiry = async (req, res) => {
  const inquiryId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('inquiryId', sql.Int, inquiryId)
      .query('DELETE FROM Inquiries WHERE id = @inquiryId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Inquiry not found' });
    } else {
      res.status(200).json({ message: 'Inquiry deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the inquiry... ${error.message}` });
  } finally {
    sql.close();
  }
};
