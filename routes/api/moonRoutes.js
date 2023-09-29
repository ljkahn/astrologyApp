const router = require('express').Router();

const moon = require('./moonRoutes');

router.use('/moon', moon);

module.exports = router;