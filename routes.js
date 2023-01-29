const router = require('express').Router();
const usersController = require('./controllers/usersController');
const movieController = require('./controllers/movieController');

router.use('/users', usersController);
router.use('/movie', movieController);

module.exports = router;