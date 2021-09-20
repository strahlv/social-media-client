import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { loginUser } from "../../slices/userSlice";
import { PrimaryButton } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";

const LoginForm = () => {
  const [{ formValues, isLoading }, handleChange, handleSubmit] = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    dispatch(
      loginUser({
        username: formValues.username,
        password: formValues.password,
      })
    );
    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(login)}>
        <Input
          type="text"
          labelText="Username"
          placeholder="caioba"
          name="username"
          onChange={handleChange}
          value={formValues.username}
        />
        <Input
          type="password"
          labelText="Password"
          placeholder="123"
          name="password"
          onChange={handleChange}
          value={formValues.password}
        />
        <PrimaryButton
          type="submit"
          disabled={isLoading}
          stretch
          color="secondaryAccent"
        >
          Login
        </PrimaryButton>
      </Form>
      <p>
        Doesn't have an account? <Link to="/register">Register now</Link>.
      </p>
    </Container>
  );
};

export default LoginForm;
