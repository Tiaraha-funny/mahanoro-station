import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Home, MyAccountStyle } from "../Components";
import { Container } from "../Components/MyAccount/style/account";
import accountSvg from "../Icons/account.png";
import bus from "../Icons/bus.png";

function MyAccount() {
  const destinations = useSelector((state) => state.destinations);

  const getBookedSeats =
    destinations !== [] && destinations.map((city) => city.destination);
  console.log(getBookedSeats);

  const getTime =
    destinations !== [] && destinations.map((city) => city.departureTime);

  const getPrice =
    destinations !== [] && destinations.map((city) => city.price);

  const dispatch = useDispatch();

  function handleChange() {
    dispatch(addSeats());
  }

  return (
    <Container>
      <MyAccountStyle.Group>
        <img src={accountSvg} />
        <MyAccountStyle.Title>
          <h2>My Account</h2>
          <span>Petah Jeannie</span>
        </MyAccountStyle.Title>
      </MyAccountStyle.Group>
      <MyAccountStyle.SubGroup>
        <div>
          <h3>My personnal informations:</h3>
          <MyAccountStyle.Form>
            <MyAccountStyle.Label>First Name: </MyAccountStyle.Label>
            <p>
              <MyAccountStyle.Input
                type="text"
                value="Petah"
                onChange={handleChange}
              />
            </p>
            <MyAccountStyle.Label>Last Name: </MyAccountStyle.Label>
            <p>
              <MyAccountStyle.Input
                type="text"
                value="Jeannie"
                onChange={handleChange}
              />
            </p>
            <MyAccountStyle.Label>Phone Number: </MyAccountStyle.Label>
            <p>
              <MyAccountStyle.Input
                type="text"
                value="034 55 030 89"
                onChange={handleChange}
              />
            </p>

            <MyAccountStyle.SubmitBtn to="/">Update</MyAccountStyle.SubmitBtn>
          </MyAccountStyle.Form>
        </div>
        <div>
          <h3>My bookings:</h3>
          <MyAccountStyle.Wrapper>
              <img src={bus} />
            <div>
              <MyAccountStyle.Info>{getBookedSeats[0]}</MyAccountStyle.Info>
              <MyAccountStyle.Info>{getTime[0]}</MyAccountStyle.Info>
            </div>
            <div>
              <MyAccountStyle.Info>2 seats</MyAccountStyle.Info>
              <MyAccountStyle.Info>{getPrice[0]} Ar </MyAccountStyle.Info>
            </div>
            <MyAccountStyle.Cancel>cancel</MyAccountStyle.Cancel>
          </MyAccountStyle.Wrapper>
        </div>
      </MyAccountStyle.SubGroup>
    </Container>
  );
}

export default MyAccount;
