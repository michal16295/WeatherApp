import { useEffect } from "react";
import styled from "styled-components";

import useGeoLocation from "../hooks/useGeoLocation";
import useWeather from "../context/Weather.context";

import { Header, WeatherData } from "../components/Home/index";

const Home = () => {
  const { getCurrentWeather, location, weather } = useWeather();
  const currentCord = useGeoLocation();

  useEffect(() => {
    if (currentCord) getCurrentWeather(currentCord);
  }, [currentCord]);

  return (
    <Container>
      {location && <Header city={location.name} country={location?.country} />}
      <WeatherData />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
`;
