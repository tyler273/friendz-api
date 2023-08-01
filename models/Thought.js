const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now 
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            // array of nested docs created w reactionSchema
        ],
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;