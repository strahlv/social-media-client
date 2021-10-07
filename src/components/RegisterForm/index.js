import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { register } from "../../slices/usersSlice";
import { Button } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";

const RegisterForm = () => {
  const [{ formValues, isLoading }, handleChange, handleSubmit] = useForm();
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
        <Input
          type="password"
          labelText="Confirmar Senha"
          name="confirmPassword"
          onChange={handleChange}
          value={formValues.confirmPassword}
        />
        <Input
          type="text"
          labelText="Nome"
          name="firstName"
          onChange={handleChange}
          value={formValues.firstName}
        />
        <Input
          type="text"
          labelText="Sobrenome"
          name="lastName"
          onChange={handleChange}
          value={formValues.lastName}
        />
        <Input
          type="email"
          labelText="Email"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <Input
          type="date"
          labelText="Data de Nascimento"
          name="birthday"
          onChange={handleChange}
          value={formValues.birthday}
        />
        <Button
          type="submit"
          disabled={isLoading}
          stretch
          backgroundColor="primary"
        >
          Inscrever-se
        </Button>
      </Form>
      <p>
        Já possui uma conta? <Link to="/login">Entrar</Link>.
      </p>
    </Container>
  );
};

export default RegisterForm;
