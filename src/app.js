const express = require("express");
const dotenv = require("dotenv").config();
const fn = require('path').basename(__filename);
const { logger } = require('./app/modules/service/logger/logger');

// Create global app object
const app = express();

// Normal express config defaults
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require('./app/modules/routed'));

// Start the server
var server = app.listen(process.env.APP_PORT || 3000, function () {
    logger.info(`[${fn}]: Server Started on port ${server.address().port} in ${process.env.NODE_ENV} mode.`);

    if (process.env.NODE_ENV !== 'production') {
        logger.info(`[${fn}]: INFO level console logging enabled.`);
        logger.debug(`[${fn}]: DEBUG level console logging enabled.`);
        logger.error(`[${fn}]: ERROR level console logging enabled.`);
    }
});