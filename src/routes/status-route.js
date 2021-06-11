/**
 * Reference for the express lib
 * @type {e | (() => Express)}
 */
const express = require('express');

/**
 * Reference for the moment lib
 * @type {moment}
 */
const moment = require('moment');

/**
 * Reference for Router on Express
 * @type {*|Router}
 */
const router = express.Router();

const { countRequest } = require('@middleware/count-request-middleware');

const current = moment();

router.all('', countRequest, (request, response) => {
    const data = {
        status: 'ok',
        startServer: current,
        uptime: moment(current).add(process.uptime(), 'seconds'),
        requestCount: request.total,
    };
    response.end(JSON.stringify(data, null, 2));
})

module.exports = router;
