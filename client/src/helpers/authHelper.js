const isLoggedIn = () => {
  return localStorage.getItem("token");
};

const logIn = (token) => {
  localStorage.setItem("token", token);
};

const logOut = (token) => {
  localStorage.removeItem("token");
};

export { logIn, isLoggedIn, logOut };
