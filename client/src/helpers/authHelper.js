const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("token"));
};

const logIn = (token) => {
  return localStorage.setItem("token", JSON.stringify(token));
};

const logOut = () => {
  localStorage.removeItem("token");
};

export { logIn, isLoggedIn, logOut };
