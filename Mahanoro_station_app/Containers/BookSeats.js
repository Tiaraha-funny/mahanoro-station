import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookSeat, NextTrips } from "../Components";
import { Container } from "../Components/BookSeat/style/bookSeat";
import ModalContainer from "./Modal";
import availableChair from "../Icons/unbooked-chair.svg";
import unavailableChair from "../Icons/red-seat.png";
import pickedSeat from "../Icons/yellow-seats.png";

import bus from "../Icons/bus.png";

export default function BookSeatsContainer() {
  //Iuse state tohandle all the cahnged in the display
  const [modalOn, setModalOn] = useState(false);
  const [countSeat, setCountSeat] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [image, setImage] = useState(availableChair);

  // UseParams used to get the unique id from when I link the link from the seat button
  const { tripId } = useParams();

  // this is the global trips
  const destinations = useSelector((state) => state.destinations);

  const destinationsDetails =
    destinations !== [] && destinations.filter((trip) => trip.id == tripId);

  const getIdOfWhatIClicked =
    destinations !== [] && destinations.find((seat) => seat.id == tripId);

  //Handle the change from the state
  function handlePickSeats() {
    const totalAmount = totalPrice + getIdOfWhatIClicked.price;
    setCountSeat(countSeat + 1)
    setTotalPrice(totalAmount);
    setImage(pickedSeat);
  }

  return (
    <Container>
      <BookSeat.GroupTitle>
        <NextTrips.BusIcon src={bus} />
        <BookSeat.Info>
          <BookSeat.SubTitle>Book a seat to:</BookSeat.SubTitle>
          <BookSeat.Title>{getIdOfWhatIClicked.destination}</BookSeat.Title>
        </BookSeat.Info>
      </BookSeat.GroupTitle>
      <BookSeat.Group>
        <BookSeat.PickSeat>
          <BookSeat.SubInfo>Pick a seat</BookSeat.SubInfo>
          <BookSeat.Seats>
            {getIdOfWhatIClicked.seats.map((seat) => (
              <BookSeat.Wrapper key={seat.id}>
                {seat.isAvailable ? (
                  <button onClick={handlePickSeats}>
                    <img src={image} />
                  </button>
                ) : (
                  <BookSeat.Unavailable src={unavailableChair} />
                )}
              </BookSeat.Wrapper>
            ))}
          </BookSeat.Seats>
        </BookSeat.PickSeat>
        <BookSeat.SecondInfo>
          <BookSeat.SubInfo>Trip information</BookSeat.SubInfo>
          <BookSeat.InfoContent>
            <BookSeat.InfoContentTitle>
              Departure time:
            </BookSeat.InfoContentTitle>
            <BookSeat.Description>
              {new Date(getIdOfWhatIClicked.departureTime).getHours()}:
              {new Date(getIdOfWhatIClicked.departureTime).getMinutes()},{" "}
              {new Date(getIdOfWhatIClicked.departureTime).toLocaleDateString()}{" "}
            </BookSeat.Description>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <BookSeat.InfoContentTitle>Driver:</BookSeat.InfoContentTitle>
            <BookSeat.Description>
              {getIdOfWhatIClicked.driverName}{" "}
            </BookSeat.Description>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <BookSeat.InfoContentTitle>
              Driver's contact:{" "}
            </BookSeat.InfoContentTitle>
            <BookSeat.Description>
              {getIdOfWhatIClicked.driverContact}
            </BookSeat.Description>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <BookSeat.InfoContentTitle>
              Estimated duration:
            </BookSeat.InfoContentTitle>
            <BookSeat.Description>
              {getIdOfWhatIClicked.estimatedDuration}
            </BookSeat.Description>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <BookSeat.InfoContentTitle>Breaks:</BookSeat.InfoContentTitle>
            <BookSeat.Description>
              {getIdOfWhatIClicked.breaks}
            </BookSeat.Description>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>
            <p> <BookSeat.Span>{getIdOfWhatIClicked.price}</BookSeat.Span> Ar / seat</p>
            <button onClick={() => setModalOn(true)}>
              book {countSeat} seat
            </button>
            <BookSeat.Description>Total: {totalPrice} Ar</BookSeat.Description>
            </div>
          </BookSeat.InfoContent>
        </BookSeat.SecondInfo>
      </BookSeat.Group>
      {modalOn && <ModalContainer modalOn={modalOn} setModalOn={setModalOn} />}
    </Container>
  );
}
