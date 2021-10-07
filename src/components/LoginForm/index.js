import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { login } from "../../slices/usersSlice";
import { Button } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";

const LoginForm = () => {
  const [{ formValues, isLoading }, handleChange, handleSubmit] = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(
      login({
        username: formValues.username,
        password: formValues.password,
      })
    );
    history.push("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Input
          type="text"
          labelText="Usuário"
          name="username"
          onChange={handleChange}
          value={formValues.username}
        />
        <Input
          type="password"
          labelText="Senha"
          name="password"
          onChange={handleChange}
          value={formValues.password}
        />
        <Button
          type="submit"
          disabled={isLoading}
          stretch
          backgroundColor="primary"
        >
          Entrar
        </Button>
      </Form>
      <p>
        Não tem uma conta? <Link to="/register">Inscreva-se</Link>.
      </p>
    </Container>
  );
};

export default LoginForm;
