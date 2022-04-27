const { Schema, Types } = require('mongoose');
const Thought = require('./Thought');
import { isEmail } from 'validator'

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [ isEmail, 'invalid email' ]
    },
    thoughts: [{
      type: Schema.Types.ObjectId, 
      ref: 'Thought'
    }], 
    friends: [this]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  .get(function() {
    return `${this.friends.length}`
  })

const User = model('user', userSchema);

module.exports = User;
