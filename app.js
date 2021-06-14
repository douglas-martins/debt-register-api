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
 * Reference for the body-parse lib
 * @type {{urlencoded: Function, text: Function, raw: Function, json: Function}|{json?: *, raw?: *, text?: *, urlencoded?: *}}
 */
const bodyParser = require('body-parser');

/**
 * Reference for this application
 * @type {*|app}
 */
const app = express();

const { countRequest } = require('@middleware/count-request-middleware');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Requests for debt
const debt = require('@routes/debt-route');
app.use('/debt', debt);

const status = require('@routes/status-route');
app.use('/status', status);

// Route API Home Screen.
app.all('/', countRequest, (request, response) => {
    response.sendFile(__dirname + '/src/views/home.html');
});

module.exports = app;
