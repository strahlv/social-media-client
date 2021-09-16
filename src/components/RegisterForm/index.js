import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../slices/userSlice";
import Form from "../Form";
import Input from "../Input";

const RegisterForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (evt) =>
    setForm({ ...form, [evt.target.name]: evt.target.value });

  const handleLogin = async (evt) => {
    evt.preventDefault();
    if (form.password === form.confirmPassword) {
      // todo: remove confirmPassword from object
      dispatch(registerUser(form));
      history.push("/");
    }
    setForm({});
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
            <Input
              type="password"
              labelText="Confirm Password"
              placeholder="123"
              name="confirmPassword"
              onChange={handleChange}
            />
            <Input
              type="text"
              labelText="First Name"
              placeholder="Caio"
              name="firstName"
              onChange={handleChange}
            />
            <Input
              type="text"
              labelText="Last Name"
              placeholder="Caiobus"
              name="lastName"
              onChange={handleChange}
            />
            <Input
              type="email"
              labelText="Email"
              placeholder="caioba@ca.io"
              name="email"
              onChange={handleChange}
            />
            <Input
              type="date"
              labelText="Birthday"
              name="birthday"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </>
        }
      />
      <p>
        Already have an account? <Link to="/login">Log in</Link>.
      </p>
    </>
  );
};

export default RegisterForm;
