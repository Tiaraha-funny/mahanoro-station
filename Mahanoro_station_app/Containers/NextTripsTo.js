import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NextTrips } from "../Components";
import { Container } from "../Components/NextTrips/styles/nextTrip";
import clock from "../Icons/clock.png";
import bus from "../Icons/bus.png";

export default function NextTripsToContainer() {
  const { trip } = useParams();
  const destinations = useSelector((state) => state.destinations);

  const findTheClickedDestination = destinations !== [] && destinations.filter((dest) => dest.destination === trip)

  const numberOfSeats = (arr) => {
    return arr.filter((seat) => seat.isAvailable).length;
  };

  return (
    <Container>
      <NextTrips.GroupTitle>
        <img src={clock} />
        <div>
          <h2>Next trip to: </h2>
          <NextTrips.Title>{trip}</NextTrips.Title>
        </div>
      </NextTrips.GroupTitle>
      {destinations &&
        findTheClickedDestination.map((trip) => {
          return (
            <NextTrips.Group key={trip.id}>
              <NextTrips.SubGroup>
                <NextTrips.BusIcon src={bus} alt="taxi-brousse" />
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                <NextTrips.Date>{new Date().toDateString(trip.departureTime)}</NextTrips.Date>
                <NextTrips.Date>{new Date(trip.departureTime).getHours()}:{new Date(trip.departureTime).getMinutes()}</NextTrips.Date>
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                <div>{new Date().toLocaleDateString(trip.departureTime)}</div>
                <NextTrips.SeatBnt>
                  {numberOfSeats(trip.seats) < 2
                    ? `${numberOfSeats(trip.seats)} seat`
                    : `${numberOfSeats(trip.seats)} seats`}{" "}
                  left
                </NextTrips.SeatBnt>
              </NextTrips.SubGroup>
              <NextTrips.SubGroup>
                {numberOfSeats(trip.seats) === 0 ? (
                  <NextTrips.LinkButtonNone to={`/nextTrip/${trip.id}`}>
                    Book a seat
                  </NextTrips.LinkButtonNone>
                ) : (
                  <NextTrips.LinkButtonNum to={`/nextTrip/${trip.id}`}>
                    Book a seat
                  </NextTrips.LinkButtonNum>
                )}
              </NextTrips.SubGroup>
            </NextTrips.Group>
          );
        })}
    </Container>
  );
}
