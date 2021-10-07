import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-primary-light);
  font-size: 0.75rem;
  height: 100px;
`;

const Footer = () => {
  return <StyledFooter>&copy;2021 Caio Ribeiro</StyledFooter>;
};

export default Footer;
