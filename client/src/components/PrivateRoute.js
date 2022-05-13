import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  return isLoggedIn() ? children : navigate("/login");
};

export default PrivateRoute;
