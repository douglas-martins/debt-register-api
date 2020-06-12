/**
 * Application startup procedures.
 */


/**
 * Reference for the express lib
 * @type {createApplication}
 */
const express = require('express');

/**
 * Reference for this application
 * @type {*|app}
 */
const app = express();

// Requests for debt
const debt = require('@routes/debt-route');
app.use('/debt', debt);

// Route API Home Screen.
app.all('*', (request, response) => {
    response.sendFile(__dirname + '/src/views/home.html');
});

module.exports = app;
