import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookSeat } from "../Components";
import { Container } from "../Components/BookSeat/style/bookSeat";
import ModalContainer from "./Modal";
import availableChair from "../Icons/unbooked-chair.svg";
import unavailableChair from "../Icons/red-seat.png";

export default function BookSeatsContainer() {
  const { tripId } = useParams();
  const destinations = useSelector((state) => state.destinations);
  const booking = useSelector((state) => state.bookingSeats);
  console.log("booking", booking);

  const [modalOn, setModalOn] = useState(false);

  const destinationsDetails =
    destinations !== [] && destinations.filter((trip) => trip.id === tripId);

  const cities =
    destinations !== [] && destinations.map((city) => city.destination);

  const getIdOfWhatIClicked =
    destinations !== [] && destinations.find((seat) => seat.id == tripId);

    console.log("seats", getIdOfWhatIClicked.seats);

  const getSeatsFromThisDestination =
    destinations !== [] &&
    getIdOfWhatIClicked &&
    getIdOfWhatIClicked.seats.find((seat) => seat.id == tripId);

  console.log("get seats from teh destina", getSeatsFromThisDestination);

  return (
    <Container>
      <BookSeat.SubTitle>Book a seat to:</BookSeat.SubTitle>
      <BookSeat.Title>{cities[0]}</BookSeat.Title>
      <BookSeat.Group>
        <BookSeat.PickSeat>
          <div>Pick a seat</div>
          <BookSeat.Seats>{getIdOfWhatIClicked.seats.map((seat) => (
            <div key={seat.id} >{seat.isAvailable ? <img src={availableChair}/> : <img src={unavailableChair} />}</div>
          )) }</BookSeat.Seats>
        </BookSeat.PickSeat>
        <BookSeat.Info>
          <div>Trip information</div>
          <BookSeat.InfoContent>
            <div>Departure time: {getIdOfWhatIClicked.departureTime} </div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>Driver: {getIdOfWhatIClicked.driverName} </div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>Driver's contact:{getIdOfWhatIClicked.driverContact} </div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>
              Estimated duration: {getIdOfWhatIClicked.estimatedDuration}{" "}
            </div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>Breaks: {getIdOfWhatIClicked.breaks}</div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div> {getIdOfWhatIClicked.price} Ar / seat</div>
            <button onClick={() => setModalOn(true)}>
              book {getIdOfWhatIClicked.seats.length} seat
            </button>
            <div>Total: </div>
          </BookSeat.InfoContent>
        </BookSeat.Info>
      </BookSeat.Group>
      {modalOn && <ModalContainer modalOn={modalOn} setModalOn={setModalOn} />}
    </Container>
  );
}
