const express = require('express');

const NotificationController = require('./controllers/NotificationController');
const PsetupController = require('./controllers/PsetupController');

const routes = express.Router();

routes.get('/notification', NotificationController.index);
routes.post('/notification', NotificationController.store);

routes.get('/psetup', PsetupController.index);
routes.post('/psetup', PsetupController.store);

module.exports = routes;