const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // validate:
        },
        thoughts: [
            // array of id values referencing thought model
        ],
        friends: [
            // array of id values referencing user model
        ]
    }
);

const User = model('user', userSchema);

module.exports = User;