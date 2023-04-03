const router = require('express').Router();
const fn = require('path').basename(__filename);
const { logger } = require('../../service/logger/logger');

router.get('', function (req, res, next) {
    return res.send("Welcome to the API. :)");
});



module.exports = router