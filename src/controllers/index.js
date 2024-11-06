const express = require('express');
const router = express.Router();

// Controller function for handling main application routes
router.get('/', (req, res) => {
    res.send('Welcome to the MVC Application!');
});

// Export the router
module.exports = router;