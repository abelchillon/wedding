const express = require('express');

const router = express.Router();

const { YourModel } = require('../models'); // Adjust the import based on your model structure

// Example controller function

router.get('/example', async (req, res) => {
  try {
    const data = await YourModel.findAll(); // Replace with your model method

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data', error });
  }
});

// Export the router

module.exports = router;
