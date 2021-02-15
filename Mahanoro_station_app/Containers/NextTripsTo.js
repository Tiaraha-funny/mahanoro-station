import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nextDestination } from "../Actions";
import { NextTrips } from "../Components";
import { Container } from "../Components/NextTrips/styles/nextTrip";

// const {town} = useParams();
    // const trips = useSelector(state => state.trips);
    // const tripToDisplay = trips.filter(trip => trip.destination === town);

export default function NextTripsToContainer() {

  const { trip } = useParams();
  const destinations = useSelector((state) => state.destinations);

  const numberOfSeats = (arr) => {
    return arr.filter((seat) => seat.isAvailable).length;
  };

  return (
    <Container>
      <div>
        <h2>Next trip to: </h2>
        <NextTrips.Title>{trip}</NextTrips.Title>
      </div>
      {destinations &&
        destinations.map((trip) => {
          return (
            <NextTrips.Group key={trip.id}>
              <NextTrips.SubGroup>
                <img src="" alt="taxi-brousse" />
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                <div>{new Date().toDateString(trip.departureTime)}</div>
                <div>{new Date().toLocaleTimeString(trip.departureTime)}</div>
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                <div>{new Date().toLocaleDateString(trip.departureTime)}</div>
                <div>
                  {numberOfSeats(trip.seats) < 2
                    ? `${numberOfSeats(trip.seats)} seat`
                    : `${numberOfSeats(trip.seats)} seats`}{" "}
                  left
                </div>
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                <NextTrips.LinkButton to={`/nextTrip/${trip.id}`}>
                  Book a seat
                </NextTrips.LinkButton>
              </NextTrips.SubGroup>
            </NextTrips.Group>
          );
        })}
    </Container>
  );
}
