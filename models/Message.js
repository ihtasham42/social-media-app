const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Types.ObjectId,
      ref: "conversation",
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
