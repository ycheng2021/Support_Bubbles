const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {

    },
    email: {

    },
    thoughts: [thoughtSchema],
    friends: [userSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
