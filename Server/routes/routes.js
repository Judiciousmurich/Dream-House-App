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

const Routes = (app) => {
  app.route('/users')
    .get(getUsers)
    .post(createUser);

  app.route('/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

  app.route('/listings')
    .get(getListings)
    .post(createListing);

  app.route('/listings/:id')
    .get(getListingById)
    .put(updateListing)
    .delete(deleteListing);

  app.route('/agents')
    .get(getAgents)
    .post(createAgent);

  app.route('/agents/:id')
    .get(getAgentById)
    .put(updateAgent)
    .delete(deleteAgent);

  app.route('/Favorites')
    .get(getFavorites)
    .post(createFavorite);

  app.route('/Favorites/:id')
  .get(getFavoriteById)
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
};

export default Routes;
