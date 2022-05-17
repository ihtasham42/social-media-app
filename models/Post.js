const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    poster: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxLength: [80, "Must be no more than 80 characters"],
    },
    content: {
      type: String,
      required: true,
      maxLength: [8000, "Must be no more than 8000 characters"],
    },
    likeCount: {
      type: Number,
      default: 5,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    edited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
