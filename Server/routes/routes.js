import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

import {
  getListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing
} from '../controllers/listingsController.js';

import {
  getAvailableListings
} from '../controllers/buyControllers.js';
import {
  getAgents,
  getAgentById,
  createAgent,
  updateAgent,
  deleteAgent
} from '../controllers/agentsController.js';

import {
  getFavorites,
  getFavoriteById,
  createFavorite,
  updateFavorite,
  deleteFavorite
} from '../controllers/favoritesController.js';

import {
  getInquiries,
  getInquiryById,
  updateInquiry,
  createInquiry,
  deleteInquiry
} from '../controllers/inquiriesController.js';

import {
  getLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation
} from '../controllers/locationsController.js';

import {
  getUserRoles,
  getUserRoleById,
  createUserRole,
  updateUserRole,
  deleteUserRole
} from '../controllers/userRolesController.js';

import { login, Register, loginRequired } from '../controllers/auth.js'
const Routes = (app) => {
  app.route('/users')
    .get(loginRequired, getUsers)
    .post(loginRequired, createUser);

  app.route('/users/:id')
    .get(loginRequired, getUserById)
    .put(loginRequired, updateUser)
    .delete(loginRequired, deleteUser);

  app.route('/listings')
    .get(loginRequired, getListings)
    .post(loginRequired, createListing);

  app.route('/listings/:id')
    .get(getListingById)
    .put(updateListing)
    .delete(deleteListing);

    app.route('/available')
    .get(getAvailableListings)

  app.route('/agents')
    .get(getAgents)
    .post(createAgent);

  app.route('/agents/:id')
    .get(getAgentById)
    .put(updateAgent)
    .delete(deleteAgent);

  app.route('/favorites')
    .get(getFavorites)
    .post(createFavorite);

  app.route('/favorites/:id')
    .get(getFavoriteById)
    .put(updateFavorite)
    .delete(deleteFavorite);

  app.route('/inquiries')
    .get(getInquiries)
    .post(createInquiry);

  app.route('/inquiries/:id')
    .get(getInquiryById)
    .put(updateInquiry)
    .delete(deleteInquiry);

  app.route('/locations')
    .get(getLocations)
    .post(createLocation);

  app.route('/locations/:id')
    .get(getLocationById)
    .put(updateLocation)
    .delete(deleteLocation);

  app.route('/user-roles')
    .get(getUserRoles)
    .post(createUserRole);

  app.route('/user-roles/:id')
    .get(getUserRoleById)
    .put(updateUserRole)
    .delete(deleteUserRole);


// auth routes
app.route('/auth/register')
.post(Register);

app.route('/auth/login')
.post(login);
};
export default Routes;
