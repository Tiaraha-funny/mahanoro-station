import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Title, Container, LinkButton, Time, Date, Group, SubGroup } from "./styles/nextTrip";


export default function NextTrips({ children, ...restProps}) {
    return <Container {...restProps} >{children}</Container>
}

NextTrips.Title = function NextTripsTitle({ children, ...restProps }) {
    return <Title { ...restProps } >{children}</Title>
}

NextTrips.LinkButton = function HomeLinkButton({ to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <LinkButton {...restProps} />
      </ReachRouterLink>
    );
  };
  

  NextTrips.Group = function NextTripsGroup({ children, ...restProps }) {
    return <Group { ...restProps } >{children}</Group>
}

NextTrips.SubGroup = function NextTripsSubGroup({ children, ...restProps }) {
  return <SubGroup { ...restProps } >{children}</SubGroup>
}

NextTrips.Time = function NextTripsTime({ children, ...restProps }) {
  return <Time { ...restProps } >{children}</Time>
}

NextTrips.Date = function NextTripsDate({ children, ...restProps }) {
  return <Date { ...restProps } >{children}</Date>
}

