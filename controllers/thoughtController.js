const { ObjectId } = require('mongoose').Types;
const { User, Thought} = require('../models');



module.exports = {
    // get all posts /api/thoughts
    getPosts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
      },
    // get single post by id /api/thoughts/:id
    getSinglePost(req, res) {
        Thought.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No post with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    // create post 
    createPost(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
    // update post /api/thoughts/id
    updatePost(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No post with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    // delete post /api/thoughts/id
    deletePost(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.userId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No post with that ID' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and posts deleted!' }))
          .catch((err) => res.status(500).json(err));
    }
    // add reaction

    // remove reaction
}
