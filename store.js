import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./Mahanoro_station_app/Reducers";
import state from "./state";

const store = createStore(rootReducers, state, applyMiddleware(thunk));

export default store;