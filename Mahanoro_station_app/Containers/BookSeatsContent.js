import React from "react";

function BookSeatsContent({ getIdOfWhatIClicked }) {
  return (
    <div>
      <div>
        <div>Pick a seat</div>
        <div>icons</div>
      </div>
      <div>
        <div>Trip information</div>
        <div>
          <div>Departure time: </div>
          <div>{getIdOfWhatIClicked.departureTime}</div>
        </div>
        <div>
          <div>Driver: </div>
          <div>{getIdOfWhatIClicked.driverName}</div>
        </div>
        <div>
          <div>Driver's contact: </div>
          <div>{getIdOfWhatIClicked.driverContact}</div>
        </div>
        <div>
          <div>Estimated duration: </div>
          <div>{getIdOfWhatIClicked.estimatedDuration}</div>
        </div>
        <div>
          <div>Breaks: </div>
          <div>{getIdOfWhatIClicked.breaks}</div>
        </div>
        <div>
          <div>{getIdOfWhatIClicked.price} Ar / seat</div>
          <button>book {getIdOfWhatIClicked.seats} seat</button>
          <div>Total: </div>
        </div>
      </div>
    </div>
  );
}

export default BookSeatsContent;
