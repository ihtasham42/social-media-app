import { io } from "socket.io-client";
import { BASE_URL } from "../config";
import { isLoggedIn } from "./authHelper";

export let socket;

export const initiateSocketConnection = () => {
  const user = isLoggedIn();

  socket = io(BASE_URL, {
    auth: {
      token: user && user.token,
    },
  });
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};
