import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components";
import { Container } from "../Components/Header/Styles/Header";
import bus from "../Icons/small-bus-title.png";

function HeaderContainer() {
  return (
    <Container>
      <Link to="/">
        <Header.Title>
          <Header.BusIcon src={bus}/>
          <span>Mahanoro Station</span>
          </Header.Title>
      </Link>
      <Link to="/myAccount">
        <h2>My Account</h2>
      </Link>
    </Container>
  );
}

export default HeaderContainer;
