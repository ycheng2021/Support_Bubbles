const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
       reactions: [reactionSchema]
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;