import React from "react";
import { Container, Title, BusIcon } from "./Styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};


Header.BusIcon = function HeaderBusIcon({ children, ...restProps }) {
  return <BusIcon {...restProps}>{children}</BusIcon>;
};

