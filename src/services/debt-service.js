/**
 * Reference for the Debt document model
 */
const debtModel = require('@models/debt-model');

/**
 * Create debt document on database
 * @param data: data for the new debt document
 * @return {Promise<*>}
 */
const createDebtService = async (data) => {
    try {
        const debt = await debtModel.create(data);

        return debt;
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Update debt document on database
 * @param data: data tha will be update on the document
 * @param objectId: document objectId for update the correct debt
 * @return {Promise<*>}
 */
const updateDebtService = async (data, objectId) => {
    try {
        return await debtModel.findOneAndUpdate({_id: objectId}, {$set: data}, {overwrite: true});
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Get debt document by his objectId
 * @param _id: for search the document
 * @return {Promise<*>}
 */
const findDebtService = async (_id) => {
    try {
        return await debtModel.findById(_id);
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Get all debts documents
 * @return {Promise<*>}
 */
const findAllDebtsService = async () => {
    try {
        return await debtModel.find();
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Get all debts documents from a userId
 * @param userId: reference for the user that will get all debts
 * @return {Promise<*>}
 */
const findAllDebtsByUserService = async (userId) => {
    try {
        return await debtModel.find({userId: userId});
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * Delete a debt document by his id
 * @param _id
 * @return {Promise<*>}
 */
const deleteDebtService = async (_id, request) => {
    try {
        return await debtModel.deleteOne({_id: _id});
    } catch (e) {
        throw new Error(e);
    }
};

module.exports = {
    createDebtService,
    updateDebtService,
    findDebtService,
    findAllDebtsService,
    findAllDebtsByUserService,
    deleteDebtService,
}
