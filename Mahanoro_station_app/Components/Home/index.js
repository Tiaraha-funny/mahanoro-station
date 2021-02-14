import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Container, Title, BtnGroup, LinkButton } from "./Styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Title = function HomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.BtnGroup = function HomeBtnGroup({ children, ...restProps }) {
  return <BtnGroup {...restProps}>{children}</BtnGroup>;
};

Home.Button = function HomeButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Home.LinkButton = function HomeLinkButton({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <LinkButton {...restProps} />
    </ReachRouterLink>
  );
};