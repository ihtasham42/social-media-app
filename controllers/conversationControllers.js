const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const User = require("../models/User");
const mongoose = require("mongoose");

const sendMessage = async (req, res) => {
  try {
    const email = req.params.id;
    const { text, userId } = req.body;

    const recipient = await User.findOne({ email });

    if (!recipient) {
      return res.status(400).send("Recipient not found");
    }

    const conversation = await Conversation.findOneAndUpdate(
      {
        recipients: {
          $in: [userId, recipient._id],
        },
      },
      {
        recipients: [userId, recipient._id],
      },
      { new: true, upsert: true }
    );

    const message = await Message.create({
      conversation: conversation._id,
      sender: userId,
      text,
    });

    return res.json({ conversation, message });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const email = req.params.id;
    const { userId } = req.body;

    const recipient = await User.findOne({ email });

    if (!recipient) {
      return res.status(400).send("Recipient not found");
    }

    const conversation = await Conversation.findOne({
      recipients: {
        $in: [userId, recipient._id],
      },
    });

    if (!conversation) {
      return res.status(400).send("Conversation does not exist");
    }

    const messages = await Message.find({
      conversation: conversation._id,
    });

    return res.json(messages);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  sendMessage,
  getMessages,
};
