import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { register } from "../../slices/usersSlice";
import { Button } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";
import { FlexCol } from "../Layout";
import Title from "../Title";

const StyledText = styled.p`
  margin-top: 2rem;
`;

const RegisterForm = () => {
  const [{ formValues, isLoading }, handleChange, handleSubmit] = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    if (formValues.password === formValues.confirmPassword) {
      delete formValues.confirmPassword;
      dispatch(register(formValues));
      history.push("/");
    }
  };

  return (
    <Container>
      <FlexCol align="center" padding="3rem 2rem">
        <Title>
          re<span>gistre-se</span>
        </Title>
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
        <StyledText>
          Já possui uma conta? <Link to="/login">Entrar</Link>.
        </StyledText>
      </FlexCol>
    </Container>
  );
};

export default RegisterForm;
