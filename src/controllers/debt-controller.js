/**
 * Reference for the debt service
 */
const {
    createDebtService, updateDebtService, findDebtService, findAllDebtsService,
    findAllDebtsByUserService, deleteDebtService
} = require('@services/debt-service');

/**
 * Controller for create a Debt document
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const createDebt = async (request, response) => {
    const { body } = request;

    try {
        const result = await createDebtService(body);

        response.json(result);
    } catch (e) {
        console.error(
            `DebtController - createDebt
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message || ''}`
        );
        response.status(500).json({ message: 'Can not create debt!' });
    }
}

/**
 * Controller for update a Debt document
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const updateDebt = async (request, response) => {
    const { body } = request;
    const { objectId } = request.params;

    try {
        const result = await updateDebtService(body, objectId);

        response.json(result);
    } catch (e) {
        console.error(
            `DebtController - updateDebt
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message}`
        );
        response.status(500).json({ message: 'Can not update debt!' });
    }
};

/**
 * Controller for get a Debt document by hist objectId
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const findDebt = async (request, response) => {
    const { _id } = request.params;

    try {
        const result = await findDebtService(_id);

        response.json(result || {});
    } catch (e) {
        console.error(
            `DebtController - findDebt
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message}`
        );
        response.status(500).json({ message: 'Can not find debt!' });
    }
};

/**
 * Controller for get all Debts documents on database
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const findAllDebts = async (request, response) => {
    try {
        const result = await findAllDebtsService();

        response.json(result);
    } catch (e) {
        console.error(
            `DebtController - findAllDebts
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message}`
        );
        response.status(500).json({ message: 'Can not find list of debts!' });
    }
};

/**
 * Controller for get all Debts documents from a userId given on URL
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const findAllDebtsByUser = async (request, response) => {
    try {
        const result = await findAllDebtsByUserService(request.params.userId);

        response.json(result);
    } catch (e) {
        console.error(
            `DebtController - findAllDebtsByUser
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message}`
        );
        response.status(500).json({ message: 'Can not find user debts!' });
    }
};

/**
 *
 * @param request: API request information
 * @param response: object that will be send to the client
 * @return {Promise<void>}
 */
const deleteDebt = async (request, response) => {
    const { _id } = request.params;

    try {
        const result = await deleteDebtService(_id);

        response.json(result);
    } catch (e) {
        console.error(
            `DebtController - deleteDebt
            (body) - ${JSON.stringify(request.body || {})}
            (queue) - ${JSON.stringify(request.queue || {})}
            (params) - ${JSON.stringify(request.params || {})}
            (error) - ${e.message}`
        );
        response.status(500).json({ message: 'Can not delete debt!' });
    }
};

module.exports = {
    createDebt,
    updateDebt,
    findDebt,
    findAllDebts,
    findAllDebtsByUser,
    deleteDebt
};
