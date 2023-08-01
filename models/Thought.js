const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
    {
        thoughtName: {
            type: String,
            required: true,
        },
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;