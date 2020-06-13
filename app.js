/**
 * Application startup procedures.
 */


/**
 * Reference for the express lib
 * @type {createApplication}
 */
const express = require('express');

/**
 * Reference for the cors lib
 * @type {*|middlewareWrapper}
 */
const cors = require('cors');


/**
 * Reference for this application
 * @type {*|app}
 */
const app = express();

app.use(cors());

// Requests for debt
const debt = require('@routes/debt-route');
app.use('/debt', debt);

// Route API Home Screen.
app.all('*', (request, response) => {
    response.sendFile(__dirname + '/src/views/home.html');
});

module.exports = app;
