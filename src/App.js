import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import { fetchCurrentUser, selectUser } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user.data) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, user.data]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
