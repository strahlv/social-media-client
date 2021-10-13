import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Title from "../Title";

const NotFoundPage = () => {
  return (
    <Container>
      <Title>
        Oops... <span>algo deu errado</span>.
      </Title>
      <p>Página não encontrada. (404)</p>
      <Link to="/">Voltar à página principal.</Link>
    </Container>
  );
};

export default NotFoundPage;
