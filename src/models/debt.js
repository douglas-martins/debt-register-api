/**
 * Debt mongo document model
 *
 */

const mongoose = require('mongoose');

const debt = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.Number,
        required: [true, 'Id for this debt']
    },
    userId: {
        type: mongoose.Schema.Types.Number,
        required: [true, 'User id from the JSONPlaceholder']
    },
    price: {
        type: mongoose.Schema.Types.Number,
        require: [true, 'The debt price']
    },
    reason: {
        type: mongoose.Schema.Types.String,
        required: [true, 'The reason for this debt']
    },
    debtDate: {
        type: mongoose.Schema.Types.String,
        default: Date.now(),
        require: [true, 'The date of the payment for this debt was made']
    }
});

module.exports.debt = mongoose.model('Debt', debt);