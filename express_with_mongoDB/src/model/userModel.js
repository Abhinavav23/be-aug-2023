const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mob: Number,
    role:{
        type: String,
        enum: ["student", "instructor", "admin"]
    },
    batch: String
})

const User = mongoose.model("myuser", UserSchema);

module.exports = User