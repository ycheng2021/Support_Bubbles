const { Schema, model } = require('mongoose');

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
        reactions: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'reaction', 
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property that gets the amount of reactions per post
thoughtSchema
    .virtual('reactionCount')
    // getter function
    .get(function() {
        return this.reactions.length
    });


// initialize thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;