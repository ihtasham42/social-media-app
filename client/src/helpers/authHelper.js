const isLoggedIn = () => {
  return localStorage.getItem("token");
};

const logIn = (token) => {
  localStorage.setItem("token", token);
};

const logOut = () => {
  localStorage.removeItem("token");
};

export { logIn, isLoggedIn, logOut };
