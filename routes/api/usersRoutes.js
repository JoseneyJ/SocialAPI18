// COMPLETE //
const router = require('express').Router();

const {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
// http://localhost:3001/api/users/
router.route('/').get(getAllUsers).post(createUser);

// /api/Users/:UserId
// http://localhost:3001/api/users/3
router
  .route('/:id').get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId
// http://localhost:3001/api/users/1/friends/2
router.route('/:id/friends/:friendID').post(addFriend).delete(deleteFriend);


module.exports = router;
