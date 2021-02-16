import React from "react";
import { MyAccountStyle } from "../Components";
import { Container } from "../Components/MyAccount/style/account";
import accountSvg from "../Icons/account.png";

function MyAccount() {
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
          <h3>my personnal informations:</h3>
          <form>
            <label>First Name: </label>
            <p>
              <MyAccountStyle.Input type="text" value="Petah" />
            </p>
            <label>Last Name: </label>
            <p>
              <MyAccountStyle.Input type="text" value="Jeannie" />
            </p>
            <label>Phone Number: </label>
            <p>
              <MyAccountStyle.Input type="number" value="034 55 030 89" />
            </p>

            <MyAccountStyle.SubmitBtn>Update</MyAccountStyle.SubmitBtn>
          </form>
        </div>
        <div>
          <h3>My bookings:</h3>
        </div>
      </MyAccountStyle.SubGroup>
    </Container>
  );
}

export default MyAccount;
