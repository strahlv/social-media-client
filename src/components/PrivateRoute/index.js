import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectCurrentUserId } from "../../slices/usersSlice";

const PrivateRoute = ({ exact, path, component, children }) => {
  const currentUserId = useSelector(selectCurrentUserId);

  if (!currentUserId) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path} component={component}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
