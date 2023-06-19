import sql from 'mssql';
import config from '../db/config.js';

// Get all user roles
export const getUserRoles = async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM UserRoles');

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'No user roles found' });
    }

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error retrieving user roles:', error);
    res.status(500).json({ message: 'An error occurred while retrieving user roles.' });
  }
};



// Get a single user role by ID
export const getUserRoleById = async (req, res) => {
  const roleId = req.params.id;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('roleId', sql.Int, roleId)
      .query('SELECT * FROM UserRoles WHERE role_id = @roleId');

    if (!result.recordset[0]) {
      res.status(404).json({ message: 'User role not found' });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while retrieving the user role... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Create a new user role
export const createUserRole = async (req, res) => {
  const { role_name } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('role_name', sql.VarChar, role_name)
      .query('INSERT INTO UserRoles (role_name) VALUES (@role_name)');

    res.status(201).json({ message: 'User role created successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while creating the user role... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Update a user role
export const updateUserRole = async (req, res) => {
  const roleId = req.params.id;
  const { role_name } = req.body;

  try {
    const pool = await sql.connect(config.sql);
    const result = await pool.request()
      .input('roleId', sql.Int, roleId)
      .input('role_name', sql.VarChar, role_name)
      .query('UPDATE UserRoles SET role_name = @role_name WHERE role_id = @roleId');

    res.status(200).json({ message: 'User role updated successfully' });
  } catch (error) {
    res.status(500).json({ error: `An error occurred while updating the user role... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};

// Delete a user role
export const deleteUserRole = async (req, res) => {
  try {
    const roleId = req.params.id;
    const pool = await sql.connect(config.sql);

    const result = await pool.request()
      .input('roleId', sql.Int, roleId)
      .query('DELETE FROM UserRoles WHERE role_id = @roleId');

    if (result.rowsAffected[0] === 0) {
      res.status(404).json({ message: 'User role not found' });
    } else {
      res.status(200).json({ message: 'User role deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: `An error occurred while deleting the user role... ${error.message}` });
  } finally {
    sql.close(); // Close the SQL connection
  }
};
