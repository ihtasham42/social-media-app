const Conversation = require("../models/Conversation");
const Message = require("../models/Message");
const User = require("../models/User");
const mongoose = require("mongoose");

const sendMessage = async (req, res) => {
  try {
    const recipientId = req.params.id;
    const { content, userId } = req.body;

    const recipient = await User.findById(recipientId);

    if (!recipient) {
      throw new Error("Recipient not found");
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
      content,
    });

    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const conversationId = req.params.id;
    const { userId } = req.body;

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      throw new Error("Conversation not found");
    }

    const messages = await Message.find({
      conversation: conversation._id,
    })
      .populate("sender", "-password")
      .sort("-createdAt")
      .limit(30);

    return res.json(messages);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getConversations = async (req, res) => {
  try {
    const { userId } = req.body;

    const conversations = await Conversation.find({
      recipients: {
        $in: [userId],
      },
    })
      .populate("recipients", "-password")
      .lean();

    for (let i = 0; i < conversations.length; i++) {
      const conversation = conversations[i];
      for (let j = 0; j < 2; j++) {
        if (conversation.recipients[j] != userId) {
          conversation.recipient = conversation.recipients[j];
        }
      }
    }

    return res.json(conversations);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  getConversations,
};
