import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components";
import { Container } from "../Components/Header/Styles/Header";

function HeaderContainer() {
  return (
    <Container>
      <Link to="/">
        <Header.Title>Mahanoro Station</Header.Title>
      </Link>
      <Link to="/myAccount">
        <h2>My Account</h2>
      </Link>
    </Container>
  );
}

export default HeaderContainer;
