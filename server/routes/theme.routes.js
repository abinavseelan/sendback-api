const express = require('express');
const controller = require('../controllers/theme.controller');
const utils = require('../utils');

const router = express.Router();

router.route('/:theme').get(utils.parseQuery, controller.getObjects);
router.route('/:theme/:id').get(utils.parseQuery, controller.getSingleObject);

module.exports = router;
