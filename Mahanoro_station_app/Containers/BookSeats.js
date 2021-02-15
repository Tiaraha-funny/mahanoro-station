import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookSeat } from "../Components";
import { Container } from "../Components/BookSeat/style/bookSeat";
import BookSeatsContent from "./BookSeatsContent";
import ModalContainer from "./Modal";
// import {BookSeatsContent} from "./BookSeatsContent";

export default function BookSeatsContainer() {
  const { tripId } = useParams();
  const destinations = useSelector((state) => state.destinations);
  const booking = useSelector((state) => state.bookingSeats);
  console.log("booking", booking);

  const [modalOn, setModalOn ] = useState(false);

  const destinationsDetails =
    destinations !== [] && destinations.filter((trip) => trip.id === tripId);

  console.log("destinations", destinations);

  const cities =
    destinations !== [] && destinations.map((city) => city.destination);

  console.log("citie", cities);

  const getIdOfWhatIClicked =
    destinations !== [] && destinations.find((seat) => seat.id == tripId);

  console.log("I can find the id here", getIdOfWhatIClicked);
  
  console.log("But I can't display it like this in my display", getIdOfWhatIClicked.id);

  const getSeatsFromThisDestination = destinations !== [] && getIdOfWhatIClicked && getIdOfWhatIClicked.seats.find(seat => seat.id);

  console.log("get seats from teh destina", getSeatsFromThisDestination);

  return (
    <Container>
      <BookSeat.SubTitle>Book a seat to:</BookSeat.SubTitle>
      <BookSeat.Title>{cities[0]}</BookSeat.Title>
      <BookSeat.Group>
        <BookSeat.PickSeat>
          <div>Pick a seat</div>
          <div>icons</div>
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
            <div>Estimated duration: {getIdOfWhatIClicked.estimatedDuration} </div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div>Breaks: {getIdOfWhatIClicked.breaks}</div>
            <div></div>
          </BookSeat.InfoContent>
          <BookSeat.InfoContent>
            <div> {getIdOfWhatIClicked.price} Ar / seat</div>
            <button onClick={() => setModalOn(true)} >book {getIdOfWhatIClicked.seats.length} seat</button>
            <div>Total: </div>
          </BookSeat.InfoContent>
        </BookSeat.Info>
      </BookSeat.Group>
      {modalOn && <ModalContainer modalOn={modalOn} setModalOn={setModalOn} />}
    </Container>
  );
}
