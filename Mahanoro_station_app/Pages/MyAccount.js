import React from "react";
import accountSvg from "../Icons/account.png";

function MyAccount() {
  return (
    <div>
      <div>
        <img src={accountSvg} />
        <div>
          <h2>My Account</h2>
          <span>Petah Jeannie</span>
        </div>
      </div>
      <div>
          <div>
        <h3>my personnal informations:</h3>
        <form>
          <label>First Name: </label>
          <p>
            <input type="text" value="Petah" />
          </p>
          <label>Last Name: </label>
          <p>
            <input type="text" value="Jeannie" />
          </p>
          <label>Phone Number: </label>
          <p>
            <input type="number" value="034 55 030 89" />
          </p>

          <button>Update</button>
        </form>
        </div>
        <div>
            <h3>My bookings:</h3>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
