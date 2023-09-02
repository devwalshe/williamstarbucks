const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const apiRoutes = require('./api'); // Import your API routes defined in api.js

// Include the API routes
router.use('/api', apiRoutes);

// Define your main application routes
router.get('/', mainController.index);
router.get('/roasts', mainController.roasts);
router.get('/pos', mainController.menu);
router.get('/coredrinks', mainController.coredrinks);
router.post('/order', mainController.order);
router.post('/partnerhours', mainController.partnerHours);

module.exports = router;
