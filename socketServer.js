const jwt = require("jsonwebtoken");
let users = [];

const authSocket = (socket, next) => {
  let token = socket.handshake.auth.token;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);
      socket.decoded = decoded;
      next();
    } catch (err) {
      next(new Error("Authentication error"));
    }
  } else {
    next(new Error("Authentication error"));
  }
};

const socketServer = (socket) => {
  console.log(socket.decoded);
  socket.on("disconnect", () => {});
};

module.exports = { socketServer, authSocket };
