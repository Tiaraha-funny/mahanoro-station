import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookSeat } from "../Components";
import { Container } from "../Components/BookSeat/style/bookSeat";
import ModalContainer from "./Modal";
import availableChair from "../Icons/unbooked-chair.svg";
import unavailableChair from "../Icons/red-seat.png";
import { addSeats } from "../Actions";
import pickedSeat from "../Icons/yellow-seats.png";

export default function BookSeatsContainer() {
  const [modalOn, setModalOn] = useState(false);
  const [totlaPrice, setTotalPrice] = useState(0);

  const { tripId } = useParams();
  const destinations = useSelector((state) => state.destinations);

  const destinationsDetails =
    destinations !== [] && destinations.filter((trip) => trip.id == tripId);

  const cities =
    destinations !== [] && destinations.map((city) => city.destination);

  const getIdOfWhatIClicked =
    destinations !== [] && destinations.find((seat) => seat.id == tripId);

  const getSeatsFromThisDestination =
    destinations !== [] &&
    getIdOfWhatIClicked &&
    getIdOfWhatIClicked.seats.find((seat) => seat.id == tripId);


    const newTotal = destinations !== [] && getIdOfWhatIClicked.price;
    console.log("new total", newTotal);

    const totalAmount = Number(newTotal + getIdOfWhatIClicked.price)

  function handlePickSeats(seat) {
    addSeats(seat);
    setTotalPrice(totalAmount);
    return <img src={pickedSeat} />;
  }

  return (
    <Container>
      <BookSeat.SubTitle>Book a seat to:</BookSeat.SubTitle>
      <BookSeat.Title>{cities[0]}</BookSeat.Title>
      <BookSeat.Group>
        <BookSeat.PickSeat>
          <div>Pick a seat</div>
          <BookSeat.Seats>
            {getIdOfWhatIClicked.seats.map((seat) => (
              <div key={seat.id}>
                {seat.isAvailable ? (
                  <button onClick={handlePickSeats}>
                    <img src={availableChair} />
                  </button>
                ) : (
                  <img src={unavailableChair} />
                )}
              </div>
            ))}
          </BookSeat.Seats>
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
            <div>Total: {totlaPrice} Ar</div>
          </BookSeat.InfoContent>
        </BookSeat.Info>
      </BookSeat.Group>
      {modalOn && <ModalContainer modalOn={modalOn} setModalOn={setModalOn} />}
    </Container>
  );
}
