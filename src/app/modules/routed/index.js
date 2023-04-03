const router = require('express').Router();
const fn = require('path').basename(__filename);
const { logger } = require('../service/logger/logger');

// Avaiable Routes for this directory
router.use('/', require('./api/index'));
router.use('/api', require('./api/index'));

module.exports = router;