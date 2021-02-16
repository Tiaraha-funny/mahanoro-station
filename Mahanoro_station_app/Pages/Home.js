import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destionation } from "../Actions";
import { Home } from "../Components";
import { Container } from "../Components/Home/styles/home";

import destinationSvg from "../Icons/destination.svg";

const bus = `https://w7.pngwing.com/pngs/31/888/png-transparent-bus-emoji-unicode-noto-fonts-sms-mount-fuji-angle-multimedia-messaging-service-orange.png`;

export default function HomePages() {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destionation());
  }, []);

  const cities =
    destinations !== [] && destinations.map((city) => city.destination);

  const getCitiesNeeded = cities.filter((data, index) => {
    console.log("data", data);
    return cities.indexOf(data) === index;
  });

  return (
    <Container>
      <Home.Title>
        <Home.BusIcon src={bus} />
        Where are you going?
      </Home.Title>
      <Home.BtnGroup>
        {destinations !== [] &&
          getCitiesNeeded.map((trip) => (
            <Home.LinkButton key={trip} to={`/destination/${trip}`}>
              <img src={destinationSvg} /> <span>{trip}</span>
            </Home.LinkButton>
          ))}
      </Home.BtnGroup>
    </Container>
  );
}
