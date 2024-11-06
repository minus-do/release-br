const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const mainController = require('./controllers/index');
app.get('/', mainController.index);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});