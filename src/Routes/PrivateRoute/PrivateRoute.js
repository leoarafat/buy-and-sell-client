import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AwesomeLoader from "../../components/AwesomeLoader";
import Loader from "../../components/Loader";

import { AuthContext } from "../../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  console.log(user);

  const location = useLocation();

  if (loading) {
    return <AwesomeLoader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
