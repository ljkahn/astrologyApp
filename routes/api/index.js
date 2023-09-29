//setting up the router to work on this route
const router = require('express').Router();
//connecting students to the studentRoutes js
const astrology = require('./index.js');

//all paths in students will be prefixed with /api/students
router.use('/astrology', astrology);

//exporting the module so we don't have to type /students in all the routes 
module.exports = router;
