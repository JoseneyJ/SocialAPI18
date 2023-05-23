//  complete
const router = require('express').Router();
const userRoutes = require('./usersRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

// http://localhost:3001/api/users
router.use('/users', userRoutes);

// http://localhost:3001/api/thoughts
router.use('/thoughts', thoughtRoutes);


module.exports = router;
