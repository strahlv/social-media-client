import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { login } from "../../slices/usersSlice";
import { Button } from "../Button";
import Container from "../Container";
import Form from "../Form";
import Input from "../Input";
import { FlexCol } from "../Layout";
import Title from "../Title";

const StyledText = styled.p`
  margin-top: 2rem;
`;

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
      <FlexCol align="center" padding="3rem 2rem">
        <Title>
          re<span>markz</span>
        </Title>
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
        <StyledText>
          Não tem uma conta? <Link to="/register">Inscreva-se</Link>.
        </StyledText>
      </FlexCol>
    </Container>
  );
};

export default LoginForm;
