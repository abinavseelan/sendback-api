const express = require('express');

const controller = require('../controllers/code.controller');

const router = express.Router();

router.route('/:code').get(controller.sendCode);
router.route('/:code').post(controller.sendCode);
router.route('/:code').put(controller.sendCode);
router.route('/:code').delete(controller.sendCode);

module.exports = router;
