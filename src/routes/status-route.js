/**
 * Reference for the express lib
 * @type {e | (() => Express)}
 */
const express = require('express');

/**
 * Reference for Router on Express
 * @type {*|Router}
 */
const router = express.Router();

router.all('', (request, response) => {
    response.json({ status: 'ok' })
})

module.exports = router;
