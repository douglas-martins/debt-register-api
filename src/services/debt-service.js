/**
 * Reference for the Debt document model
 */
const debtModel = require('@models/debt-model');

/**
 * Create debt document on database
 * @param data: data for the new debt document
 * @return {Promise<*>}
 */
module.exports.create = async (data) => {
    try {
        const debt = await new debtModel.debt(data);

        return await debt.save();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

/**
 * Update debt document on database
 * @param data: data tha will be update on the document
 * @param objectId: document objectId for update the correct debt
 * @return {Promise<*>}
 */
module.exports.update = async (data, objectId) => {
    try {
        return await debtModel.debt.findOneAndUpdate({_id: objectId}, {$set: data}, {overwrite: true});
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

/**
 * Get debt document by his objectId
 * @param _id: for search the document
 * @return {Promise<*>}
 */
module.exports.find = async (_id) => {
    try {
        return await debtModel.debt.findById(_id).lean();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

/**
 * Get all debts documents
 * @return {Promise<*>}
 */
module.exports.findAll = async () => {
    try {
        return await debtModel.debt.find().lean();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

/**
 * Get all debts documents from a userId
 * @param userId: reference for the user that will get all debts
 * @return {Promise<*>}
 */
module.exports.findAllByUser = async (userId) => {
    try {
        return await debtModel.debt.find({userId: userId}).lean();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

/**
 * Delete a debt document by his id
 * @param _id
 * @return {Promise<*>}
 */
module.exports.delete = async (_id) => {
    try {
        return await debtModel.debt.deleteOne({_id: _id}).lean();
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};
