const { User } = require('../models');

const userController = {
  // get all users
  getAllUsers(req, res) {
      User.find({})
          .then(userData => res.json(userData))
          .catch(err => {
              console.log(err);
              res.status(400).json(err);
          });
  },
  // create user
  createUser({ body }, res) {
      User.create(body)
          .then(userData => res.json(userData))
          .catch(err => res.status(400).json(err));
  },
  //get user by id
  getUserByID({ params }, res) {
      User.findOne({ _id: params.id })
          .then(userData => res.json(userData))
          .catch(err => res.status(400).json(err));
  },
  //update user by id
  updateUser({ params, body }, res) {
      User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(userData => {
              if(!userData) {
                  res.status(404).json({ message: 'No user found with this ID!' });
                  return;
              }

              res.json(userData);
          })
          .catch(err => res.status(400).json(err));
  },
  //delete user 
  deleteUser({params}, res) {
      User.findOneAndDelete({_id: params.id})
      .then(userData => {
          if(!userData) {
              res.status(404).json({ message: 'No user found with this ID!' });
              return;
          }

          res.json(userData);
      })
      .catch(err => res.status(400).json(err));
  },
  //addFriend
  addFriend({params}, res){
      User.findOneAndUpdate(
          {_id: params.id},
          {$push: {friends: params.friendID}},
          {runValidators: true, new: true}
      )
      .then(userData => {
          if(!userData) {
              res.status(404).json({ message: 'No user found with this ID!' });
              return;
          }
          res.json(userData);
      })
      .catch(err => res.status(400).json(err));
  },
  //caps made all the difference in the 'friendID and not friendId' ugh 
  deleteFriend(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendID } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;