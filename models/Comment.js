const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    commenter: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
      required: true,
    },
    reply: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentSchema);
