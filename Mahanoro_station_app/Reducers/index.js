import { combineReducers } from "redux";

export function destinations(state = [], action) {
  switch (action.type) {
    case "DESTINATION":
      return action.value;
      break;

    default:
      return state;
      break;
  }
}

export function bookingSeats(state = [], action) {
    switch (action.type) {
      case "BOOK_SEATS":
        return action.value;
        break;
  
      default:
        return state;
        break;
    }
  }

export const rootReducers = combineReducers({
    destinations,
    // nextDestinationTo,
    bookingSeats
})