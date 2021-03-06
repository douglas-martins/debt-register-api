/**
 * Debt register project.
 *
 * Start script, setup initial definitions.
 *
 * @package  Express
 *
 */


/*
|--------------------------------------------------------------------------
| Register environment and framework
|--------------------------------------------------------------------------
|
| Loading the environment variables set in .env file ans well as
| registering the Express framework for this application.
|
*/

require('module-alias/register');
const config = require('@config/config');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const App = require('./app');
const mongoose = require('@connections/mongo');

app.use(bodyParser.json());
app.set('baseUrl', config.baseUrl);
app.use(App);

// Develop server setup
require('@infra/development')(app);