import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import { fetchCurrentUser, logoutUser, selectUser } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();
  // const history = useHistory();

  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  let content;
  if (user.status === "loading") {
    content = "Loading...";
  } else if (!user.data) {
    content = <Redirect to="login" />;
  } else {
    content = (
      <>
        <h1>Hello {user.data.firstName}! :)</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {content}
        </Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
