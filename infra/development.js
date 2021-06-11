/**
 * Develop server
 *
 * Server for localhost development without secure ssl certificates.
 */
const config = require('@config/config');
const http = require('http');


/**
 * Listening on insecure port just for development purposes.
 * @param app
 */
module.exports = (app) => {
    const server = http.createServer(app);

    server.listen(config.port, config.baseUrl, (err) => {
        if (err) {
            console.error(`Error starting localhost server ${err}`, {file: module.filename});
            return;
        }
        console.log('Debt Register Backend');
        console.log(`🌎 Server started gracefully! ||| Running on ${config.baseUrl}:${config.port} Press CTRL+C to stop it. |||`);
    });
};
