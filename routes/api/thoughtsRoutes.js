// ADJUST TO THOUGHTS 
const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtByID,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');// fix path connection 


// /api/Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtId').get(getThoughtByID).put(updateThought).delete(deleteThought);

// /api/Thoughts/:ThoughtId/assignments
router.route('/:thoughtId/reactions').post(addReaction);

// /api/Thoughts/:ThoughtId/assignments/:assignmentId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
