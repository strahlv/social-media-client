import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoadingScreen from "./components/LoadingScreen";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import RegisterForm from "./components/RegisterForm";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";
import { fetchAuthenticatedUser, selectUsers } from "./slices/usersSlice";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchAuthenticatedUser());
  }, [dispatch]);

  if (user.status === "loading") {
    return <LoadingScreen />;
  }

  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <PrivateRoute exact path="/users/:userId" component={UserPage} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
