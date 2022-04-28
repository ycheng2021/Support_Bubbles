const { User, Thought} = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
    // get single user by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    // create user
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
    // delete user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and posts deleted!' }))
          .catch((err) => res.status(500).json(err));
    },
    // add friend
    addFriend(req, res) {
      User.findOneAndUpdate( 
        { _id: req.params.friendId },
        { $push: { reactions: friend._id } },
        { new: true }
        )
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: "No reaction with that ID" })
            : Thought.findOneAndUpdate(
                { reactions: req.params.reactionId },
                { $pull: { thoughts: req.params.reactionId } },
                { new: true }
              )
        )
      .then(() => res.json({ message: "User and posts deleted!" }))
      .catch((err) => res.status(500).json(err));
    },
    // remove friend
    removeFriend(req, res) {
      Friend.findOneAndDelete( { _id: req.params.reactionId })
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: "No reaction with that ID" })
            : Thought.findOneAndUpdate(
                { reactions: req.params.reactionId },
                { $pull: { thoughts: req.params.reactionId } },
                { new: true }
              )
        )
      .then(() => res.json({ message: "User and posts deleted!" }))
      .catch((err) => res.status(500).json(err));
    }
}


