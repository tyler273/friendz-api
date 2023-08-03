const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

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
            default: Date.now,
            get: timeStamp,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
});

// getter to format date upon query
function timeStamp(createdAt) {
    return createdAt.toLocaleDataString("en-US", {
        day: "2-digit",
        year: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
    });
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;