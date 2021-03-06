import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Container, Title, BtnGroup, LinkButton, BusIcon, SubTitle } from "./Styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Title = function HomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.SubTitle = function HomeSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
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

Home.BusIcon = function HomeBusIcon({ children, ...restProps }) {
  return <BusIcon {...restProps}>{children}</BusIcon>;
};