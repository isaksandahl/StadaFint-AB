const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    hashedPassword: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    admin: { type: Boolean, default: false }
});

const UsersModel = model("Users", userSchema);

module.exports = UsersModel;