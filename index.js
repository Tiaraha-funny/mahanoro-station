import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./Mahanoro_station_app/GlobalStyles";
import MahanoroStationApp from "./Mahanoro_station_app/MahanorStationApp";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <MahanoroStationApp />
    </Router>
  </Provider>,
  document.getElementById("root")
);
