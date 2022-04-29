const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
)


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
            reactionSchema
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