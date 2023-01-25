import { initiateSocketConnection } from "./socketHelper";

const isLoggedIn = () => {
return JSON.parse(localStorage.getItem("user"));
};

const isAdmin = () => {
const user = JSON.parse(localStorage.getItem("user"));
if (user && user.isAdmin) {
return true;
}
return false;
};

const loginUser = (user) => {
localStorage.setItem("user", JSON.stringify(user));
initiateSocketConnection();
};

const logoutUser = () => {
localStorage.removeItem("user");
initiateSocketConnection();
};

export { loginUser, isLoggedIn, logoutUser, isAdmin }