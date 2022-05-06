const express = require("express");
const mongoose = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log("MongoDB connected");
});

app.listen(3000, () => {
  console.log("Listening");
});

app.use(express.json());
