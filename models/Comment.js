const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    commenter: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
    content: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentSchema);
