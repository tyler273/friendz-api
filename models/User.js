const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;