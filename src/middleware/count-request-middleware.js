/**
 * Total requests the server handle since start
 * @type {number}
 */
let total = 0;

/**
 * Count the request made for server (use on /status route)
 * @param request default server request object
 * @param response default server response object
 * @param next default server next function
 * @returns {Promise<void>}
 */
const countRequest = async (request, response, next) => {
    total += 1;
    request.total = total;
    next()
};

module.exports = { countRequest };
