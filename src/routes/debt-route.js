/**
 * Routes for debt document.
 * @type {e | (() => Express)}
 */
const express = require('express');

/**
 * Reference for the controller of this document
 */
const debtController = require('@controllers/debt-controller');

/**
 * Reference for the validators for the debt document
 */
const debtValidator =  require('@validators/debt-validator');

/**
 * Reference for Router on Express
 * @type {*|Router}
 */
const router = express.Router();

/**
 * @api {post} /debt/ Create Debt
 * @apiName Create new debt
 * @apiPermission user
 * @apiGroup Debt
 *
 * @apiParam  {String} [userId] User id
 * @apiParam  {String} [price] Debt price
 * @apiParam  {String} [reason] Debt reason
 * @apiParam  {String} [debtDate] Debt date
 *
 * @apiSuccess (200) {Object} mixed `Debt` object
 */
router.post('/', debtValidator.createRules(), debtValidator.validate, debtController.create);

/**
 * @api {put} /debt/:userId Update Debt
 * @apiName Update a debt
 * @apiPermission user
 * @apiGroup Debt
 *
 * @apiParam  {String} [userId] User id
 * @apiParam  {String} [price] Debt price
 * @apiParam  {String} [reason] Debt reason
 * @apiParam  {String} [debtDate] Debt date
 *
 * @apiSuccess (200) {Object} mixed `Debt` object
 */
router.put('/', debtValidator.updateRules(), debtValidator.validate, debtController.update);

/**
 * @api {get} /debt/ Get Debt
 * @apiName Get a debt
 * @apiPermission user
 * @apiGroup Debt
 *
 * @apiParam  {String} [params] Parameters for search a debt (price, userId, etc..)
 *
 * @apiSuccess (200) {Object[]} mixed `Debt` object
 */
router.get('/', debtController.find);

/**
 * @api {get} /debt/all/ Get all Debts
 * @apiName Get all debts
 * @apiPermission user
 * @apiGroup Debts
 *
 * @apiSuccess (200) {Object[]} mixed `Debt` object
 */
router.get('/all', debtController.findAll);

/**
 * @api {get} /debt/all/:userId Get all Debts from a user
 * @apiName Get all debts
 * @apiPermission user
 * @apiGroup Debts
 *
 * @apiParam  {String} [userId] User id
 *
 * @apiSuccess (200) {Object[]} mixed `Debt` object
 */
router.get('/all/:userId', debtController.findAllByUser);

/**
 * @api {delete} /debt/ Delete al Debt
 * @apiName Delete a debt
 * @apiPermission user
 * @apiGroup Debt
 *
 * @apiParam  {String} [id] Debt id
 *
 * @apiSuccess (200) {Object[]} mixed `Debt` object
 */
router.delete('/', debtController.delete);


module.exports = router;