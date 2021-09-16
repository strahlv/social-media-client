import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { loginUser } from "../../slices/userSlice";
import Form from "../Form";
import Input from "../Input";

const LoginForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (evt) =>
    setForm({ ...form, [evt.target.name]: evt.target.value });

  const handleLogin = async (evt) => {
    evt.preventDefault();
    dispatch(loginUser({ username: form.username, password: form.password }));
    history.push("/");
  };

  return (
    <>
      <Form
        handleSubmit={handleLogin}
        component={
          <>
            <Input
              type="text"
              labelText="Username"
              placeholder="caioba"
              name="username"
              onChange={handleChange}
            />
            <Input
              type="password"
              labelText="Password"
              placeholder="123"
              name="password"
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </>
        }
      />
      <p>
        Doesn't have an account? <Link to="/register">Register now</Link>.
      </p>
    </>
  );
};

export default LoginForm;
