const mongoose = require("mongoose");

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    mob: Number
})

const User = mongoose.model("myuser", UserSchema);

module.exports = User