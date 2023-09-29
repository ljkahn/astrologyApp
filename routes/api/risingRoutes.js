const router = require('express').Router();

const rising = require('./risingRoutes');

router.use('/rising', rising);

module.exports = router;