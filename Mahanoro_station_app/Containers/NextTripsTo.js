import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nextDestination } from "../Actions";

export default function NextTripsToContainer() {
  const destinations = useSelector((state) => state.destinations);
  const nextTrips = useSelector((state) => state.nextDestinationTo);
  console.log(nextTrips);
  const dispatch = useDispatch();
  const { trip } = useParams();
  // Get the array of trips that we have per destination
  const nextTripsDetails =
    destinations !== [] &&
    destinations.filter((trip) => trip.destination === trip);

  useEffect(() => {
    dispatch(nextDestination(nextTripsDetails));
  }, [destinations]);

  // Number of seats available
  const numberOfSeats = (arr) => {
    return arr.filter((seat) => seat.isAvailable).length;
  };

  return (
    <Fragment>
      <div>
        <h2>Next trip to: </h2>
        <span>{trip}</span>
      </div>
      {nextTrips &&
        nextTrips.map((trip) => {
          return (
            <div key={trip.id}>
              <div>
                <img src="" alt="taxi-brousse" />
              </div>
              <div>
                <div>{trip.departureTime}</div>
                <div>{trip.departureTime}</div>
              </div>
              <div>
                <div>{trip.departureTime}</div>
                <div>
                  {numberOfSeats(trip.seats) < 2
                    ? `${numberOfSeats(trip.seats)} seat`
                    : `${numberOfSeats(trip.seats)} seats`}{" "}
                  left
                </div>
              </div>
              <div>
                <a to={`/trip/${trip.id}`}>
                  <button>Book a seat</button>
                </a>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
}
