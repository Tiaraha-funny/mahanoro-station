import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destionation } from "../Actions";
import { Home } from "../Components";
import { Container } from "../Components/Home/styles/home";

export default function HomePages() {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destionation());
  }, []);

  const cities =
    destinations !== [] && destinations.map((city) => city.destination);

  const getCitiesNeeded =
    destinations !== [] &&
    destinations
      .map((city) => city.destination)
      .filter((data, index) => {
        return cities.indexOf(data) === index;
      });
  console.log(getCitiesNeeded);

  return (
    <Container>
      <Home.Title>Where are you going?</Home.Title>
      <Home.BtnGroup>
        {destinations !== [] &&
          getCitiesNeeded.map((trip) => (
            <Home.LinkButton key={trip} to={`/destination/${trip}`}>
              {trip}
            </Home.LinkButton>
          ))}
      </Home.BtnGroup>
    </Container>
  );
}
