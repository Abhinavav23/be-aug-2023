const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
   title: {
        type: String,
        required: true,
        minLength: 3
   },
   description: {
        type: String,
        required: true,
        minLength: 3
   },
   tag: {
        type: [String],
        required: true,
        default: ["General"]
   },
   imageUrl: {
        type: String,
        default: ""
   },
   user: {
        type: Schema.Types.ObjectId,
        ref: "User"
   },
   username: String,
   upVote: {
        type: Number,
        default: 0
   },
   downVote: {
        type: Number,
        default: 0
    },
    votedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
       },
    ]
}, {versionKey: false})

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
