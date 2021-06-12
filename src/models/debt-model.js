/**
 * Reference for the mongoose
 * @type {Mongoose}
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types } = Schema;
const { Number, String } = Types;

/**
 * Debt document model
 * @type: {*|Schema}
 */
const debtModel = new Schema({
    userId: {
        type: Number,
        required: [true, 'User id from the JSONPlaceholder']
    },
    price: {
        type: Number,
        require: [true, 'The debtModel price']
    },
    reason: {
        type: String,
        required: [true, 'The reason for this debtModel']
    },
    debtDate: {
        type: String,
        default: Date.now(),
        require: [true, 'The date of the payment for this debtModel was made']
    }
});

/**
 * Model for the debtModel document
 */
module.exports = mongoose.model('Debt', debtModel);
