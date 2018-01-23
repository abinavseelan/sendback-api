const express = require('express');
const controller = require('../controllers/theme.controller');

const router = express.Router();

router.route('/:theme').get(controller.getObjects);


module.exports = router;
