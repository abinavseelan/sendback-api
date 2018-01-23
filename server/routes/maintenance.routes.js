const express = require('express');
const controller = require('../controllers/maintenance.controller');

const router = express.Router();

router.route('/ping').get(controller.ping);

module.exports = router;
