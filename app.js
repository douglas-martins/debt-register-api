/**
 * Application startup procedures.
 */


/**
 * Reference for the express lib
 * @type {e | (() => Express)}
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

const status = require('@routes/status-route');
app.use('/status', status);

// Route API Home Screen.
app.all('*', (request, response) => {
    response.sendFile(__dirname + '/src/views/home.html');
});


module.exports = app;
