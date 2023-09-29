const router = require('express').Router();

const sun = require('./sunRoutes');

router.use('/sun', sun);

module.exports = router;