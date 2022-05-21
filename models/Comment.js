const mongoose = require("mongoose");
const Post = require("./Post");
const filter = require("../util/filter");

const CommentSchema = new mongoose.Schema(
  {
    commenter: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "post",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
    children: [
      {
        type: mongoose.Types.ObjectId,
        ref: "comment",
      },
    ],
    edited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

CommentSchema.post("remove", async function (res, next) {
  const comments = await this.model("comment").find({ parent: this._id });

  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    await comment.remove();
  }

  next();
});

CommentSchema.pre("save", function (next) {
  if (this.content.length > 0) {
    this.content = filter.clean(this.content);
  }

  next();
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
