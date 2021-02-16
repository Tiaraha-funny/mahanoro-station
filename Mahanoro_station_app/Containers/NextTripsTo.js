import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NextTrips } from "../Components";
import { Container } from "../Components/NextTrips/styles/nextTrip";

const clock =
  "data:image/png;base64,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";
const bus = `https://w7.pngwing.com/pngs/31/888/png-transparent-bus-emoji-unicode-noto-fonts-sms-mount-fuji-angle-multimedia-messaging-service-orange.png`;

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
