import React, { Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import HeaderContainer from "./Containers/Header";
import NextTripsToContainer from "./Containers/NextTripsTo";
import HomePages from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";

function MahanoroStationApp() {
  return (
    <Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path="/">
          <HomePages />
        </Route>
        <Route path="/destination/:trip">
            <NextTripsToContainer />
        </Route>
        <Route path="./bookSeat"></Route>
        <Route path="/myAccount">
          <MyAccount />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default MahanoroStationApp;
