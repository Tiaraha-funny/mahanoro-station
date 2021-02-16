import React from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import { Title, Container, LinkButtonNone, LinkButtonNum, Time, Date, Group, SubGroup,BusIcon, GroupTitle } from "./styles/nextTrip";


export default function NextTrips({ children, ...restProps}) {
    return <Container {...restProps} >{children}</Container>
}

NextTrips.Title = function NextTripsTitle({ children, ...restProps }) {
    return <Title { ...restProps } >{children}</Title>
}

NextTrips.LinkButtonNone = function HomeLinkButtonNone({ numberOfSeats, to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <LinkButtonNone {...restProps} numberOfSeats={numberOfSeats} />
      </ReachRouterLink>
    );
  };
  
  NextTrips.LinkButtonNum = function HomeLinkButtonNum({ numberOfSeats, to, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <LinkButtonNum {...restProps} numberOfSeats={numberOfSeats} />
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

NextTrips.GroupTitle = function NextTripsGroupTitle({ children, ...restProps }) {
  return <GroupTitle { ...restProps } >{children}</GroupTitle>
}


NextTrips.BusIcon = function NextTripsBusIcon({ children, ...restProps }) {
  return <BusIcon {...restProps}>{children}</BusIcon>;
};