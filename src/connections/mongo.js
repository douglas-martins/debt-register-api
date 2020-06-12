/**
 * Initiate the Mongoose configurations for using in this system
 */

const mongoose = require('mongoose');
const host = process.env.DATABASE_HOST || 'localhost'
const port = process.env.DATABASE_PORT || 2701
const mongoURL = `mongodb://${host}:${port}/${process.env.DATABASE_NAME}?authSource=admin`;

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + mongoURL);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});