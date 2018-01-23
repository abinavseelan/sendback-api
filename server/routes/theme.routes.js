const express = require('express');
const controller = require('../controllers/theme.controller');
const utils = require('../utils');

const router = express.Router();

router.route('/:theme').get(utils.parseQuery, controller.getObjects);
router.route('/:theme/:id').get(utils.parseQuery, controller.getSingleObject);
router.route('/:theme').post(utils.parseQuery, utils.validateSchema, controller.createObject);

module.exports = router;
