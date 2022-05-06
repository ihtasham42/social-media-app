const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    recipients: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { required: true }
);

module.exports = mongoose.model("conversation", ConversationSchema);
