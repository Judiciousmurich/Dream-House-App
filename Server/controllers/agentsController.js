import sql from 'mssql';
import config from '../db/config.js';

// Get all agents
export const getAgents = async (req, res) => {
  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request().query('SELECT * FROM Agents');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving agents... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Get a single agent by ID
export const getAgentById = async (req, res) => {
  const agentId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('agentId', sql.Int, agentId)
      .query('SELECT * FROM Agents WHERE id = @agentId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'Agent not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the agent... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Create a new agent
export const createAgent = async (req, res) => {
  const { name, contact_number, email, profile_info } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('name', sql.VarChar, name)
      .input('contactNumber', sql.VarChar, contact_number)
      .input('email', sql.VarChar, email)
      .input('profileInfo', sql.VarChar, profile_info)
      .query('INSERT INTO Agents (name, contact_number, email, profile_info) VALUES (@name, @contactNumber, @email, @profileInfo)');
  
    res.status(201).json({ message: 'Agent created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the agent... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Update an agent
export const updateAgent = async (req, res) => {
  const agentId = req.params.id;
  const { name, contact_number, email, profile_info } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('agentId', sql.Int, agentId)
      .input('name', sql.VarChar, name)
      .input('contactNumber', sql.VarChar, contact_number)
      .input('email', sql.VarChar, email)
      .input('profileInfo', sql.VarChar, profile_info)
      .query('UPDATE Agents SET name = @name, contact_number = @contactNumber, email = @email, profile_info = @profileInfo WHERE id = @agentId');
  
    res.status(200).json({ message: 'Agent updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the agent... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Delete an agent
export const deleteAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await sql.connect(config.sql);
  
    const result = await pool.request()
      .query(`DELETE FROM Agents WHERE id = ${id}`);
  
    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'Agent not found' });
    } else {
      res.status(200).json({ message: 'Agent deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the agent... ${error.message}` });
  } finally {
    sql.close();
  }
};
