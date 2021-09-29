import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { register } from "../../slices/userSlice";
import { PrimaryButton } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";

const RegisterForm = () => {
  const [{ formValues, setFormValues, isLoading }, handleChange, handleSubmit] =
    useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    if (formValues.password === formValues.confirmPassword) {
      // todo: remove confirmPassword from object
      dispatch(register(formValues));
      history.push("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleRegister)}>
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
        <Input
          type="password"
          labelText="Confirm Password"
          placeholder="123"
          name="confirmPassword"
          onChange={handleChange}
          value={formValues.confirmPassword}
        />
        <Input
          type="text"
          labelText="First Name"
          placeholder="Caio"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
        />
        <Input
          type="text"
          labelText="Last Name"
          placeholder="Caiobus"
          name="lastName"
          onChange={handleChange}
          value={formValues.lastName}
        />
        <Input
          type="email"
          labelText="Email"
          placeholder="caioba@ca.io"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          type="date"
          labelText="Birthday"
          name="birthday"
          onChange={handleChange}
          value={formValues.birthday}
        />
        <PrimaryButton type="submit" disabled={isLoading} stretch>
          Register
        </PrimaryButton>
      </Form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>.
      </p>
    </Container>
  );
};

export default RegisterForm;
