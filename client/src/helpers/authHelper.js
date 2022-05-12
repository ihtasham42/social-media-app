const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const loginUser = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

const logoutUser = () => {
  localStorage.removeItem("token");
};

export { loginUser, isLoggedIn, logoutUser };
