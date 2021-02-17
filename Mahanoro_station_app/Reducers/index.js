import { combineReducers } from "redux";

export function destinations(state = [], action) {
  switch (action.type) {
    case "DESTINATION":
      return action.value;
      break;
    case "ADD_SEATS": 
    return [...state, action.value]
    default:
      return state;
      break;
  }
}


export const rootReducers = combineReducers({
    destinations,
})
