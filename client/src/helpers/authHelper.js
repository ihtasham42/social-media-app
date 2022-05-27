import { initiateSocketConnection } from "./socketHelper";

const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const loginUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  initiateSocketConnection();
};

const logoutUser = () => {
  localStorage.removeItem("user");
  initiateSocketConnection();
};

export { loginUser, isLoggedIn, logoutUser };
