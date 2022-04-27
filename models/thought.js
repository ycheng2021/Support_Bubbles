const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtName: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Unnamed assignment',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
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