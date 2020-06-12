/**
 * Reference for the express-validator type
 */
const {body, validationResult} = require('express-validator');

const moment = require('moment');

/**
 * Rules for create the debt document
 * @return {ValidationChain[]}
 */
module.exports.createRules = () => {
    return  [
        body('userId', 'Invalid user id').exists().isInt(),
        body('price', 'Invalid debt price').exists().isNumeric(),
        body('reason', 'Invalid debt reason').exists().isString(),
        body('debtDate', 'Invalid debt date').exists().isString()
        // body('debtDate', 'Invalid deb date').exists().isIn(['enabled', 'disabled'])
    ];
};

/**
 * Rules for update the debt document
 * @return {[ValidationChain, ValidationChain, ValidationChain, ValidationChain]}
 */
module.exports.updateRules = () => {
    return  [
        body('userId', 'Invalid user id').optional().isInt(),
        body('price', 'Invalid debt price').optional().isNumeric(),
        body('reason', 'Invalid debt reason').optional().isString(),
        body('debtDate', 'Invalid debt date').optional().isDataURI()
        // body('debtDate', 'Invalid deb date').exists().isIn(['enabled', 'disabled'])
    ];
};

/**
 * Validate the request body
 * @param request
 * @param response
 * @param next
 * @return {any}
 */
module.exports.validate = (request, response, next) => {
    const errors = validationResult(request);
    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));

    return response.status(422).json({
        errors: extractedErrors,
    });
};
