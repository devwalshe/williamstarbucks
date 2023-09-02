const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // Import fetch if not already done
const API_BASE_URL = 'https://williampos-3f06192ea47f.herokuapp.com/';

const drinkController = require('../controllers/drinkController');
const customerController = require('../controllers/customerController');
const customizeController = require('../controllers/customizeController');
const roastsController = require('../controllers/roastsController');

router.get('/coreDrinks', (req, res) => {
  // Construct the API URL for the 'coreDrinks' endpoint
  const apiUrl = `${API_BASE_URL}api/coredrinks`;

  // Make the API request using fetch or another HTTP library
  fetch(apiUrl)
    .then(response => {
      // Handle the API response here
      res.json(response);
    })
    .catch(error => {
      // Handle errors here
      res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    });
});

router.get('/customers', customerController.sendCustomer);
router.get('/allcustomers', customerController.sendAllCustomers);
router.get('/allnames', customerController.sendNames);
router.get('/customizations', customizeController.sendCustomizations);
router.get('/roasts', roastsController.sendRoasts);

module.exports = router;
