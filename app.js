/**
 * Application startup procedures.
 *
 */

const config = require('@config/config');
const express = require('express');
const app = express();
const mongoose = require('@connections/mongo');

// Formatting response
// app.response.__proto__.processResponse = function (status=500, message = 'Internal error!', data = {}, debug = {}) {
//     let result = {};
//
//     result.status = status;
//     result.message = message;
//
//     if (Object.keys(data).length !== 0) {
//         result.data = data;
//     }
//
//     if (Object.keys(debug).length !== 0) {
//         result.debug = debug;
//     }
//
//     result.version = '1.0.0';
//     result.endpoint = config.baseUrl;
//
//     this.status(status).json(result);
// };

// // Requests for root address - index
// const baseRoute = require('@routes/base');
// app.use('/', baseRoute);
//
// // Requests for auth - oauth2
// const auth = require('@routes/auth');
// app.use('/o', auth);
//
// // Requests for medicines
// const medicine = require('@routes/medicine');
// app.use('/medicines', medicine);


// Route not found, send 404.
app.all('*', (req, res) => {
    res.json({status: 404, message: 'Not found!'});
});

module.exports = app;
