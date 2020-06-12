/**
 * Reference for the mongoose
 * @type {Mongoose}
 */
const mongoose = require('mongoose');

/**
 * Debt document model
 * @type: {*|Schema}
 */
const debtModel = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.Number,
        required: [true, 'User id from the JSONPlaceholder']
    },
    price: {
        type: mongoose.Schema.Types.Number,
        require: [true, 'The debtModel price']
    },
    reason: {
        type: mongoose.Schema.Types.String,
        required: [true, 'The reason for this debtModel']
    },
    debtDate: {
        type: mongoose.Schema.Types.String,
        default: Date.now(),
        require: [true, 'The date of the payment for this debtModel was made']
    }
});

/**
 * Model for the debtModel document
 * @type {((typedArray: (Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array), index: number, value: number) => number) | (() => string)}
 */
module.exports.debt = mongoose.model('Debt', debtModel);