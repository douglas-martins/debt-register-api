const config = require('@config/config');
const debtService = require('@services/debt-service')

/**
 * Controller for create a Debt document
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.create = async (request, response, next) => {
    const result = await debtService.create(request.body);

    response.json(result);
};

/**
 * Controller for update a Debt document
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.update = async (request, response, next) => {

};

/**
 * Controller for get a Debt document by hist objectId
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.find = async (request, response, next) => {
    const result = await debtService.find(request.body._id);

    response.json(result);
};

/**
 * Controller for get all Debts documents on database
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.findAll = async (request, response, next) => {
    const result = await debtService.findAll();

    response.json(result);
};

/**
 * Controller for get all Debts documents from a userId given on URL
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.findAllByUser = async (request, response, next) => {
    const result = await debtService.findAllByUser(request.params.userId);

    response.json(result);
};

/**
 *
 * @param request: API request information
 * @param response: object that will be send to the client
 * @param next: go to the next element from request
 * @return {Promise<void>}
 */
module.exports.delete = async (request, response, next) => {
    const result = await debtService.delete(request.body._id);

    response.json(result);
};