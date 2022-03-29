import { useEffect } from "react";
import styled from "styled-components";

import useGeoLocation from "../hooks/useGeoLocation";
import useWeather from "../context/Weather.context";

import { Header, WeatherData, DataItem } from "../components/Home/index";

const Home = () => {
  const { getCurrentWeather, location, weather } = useWeather();
  const currentCord = useGeoLocation();

  useEffect(() => {
    if (currentCord) getCurrentWeather(currentCord);
  }, [currentCord]);

  useEffect(() => {
    console.log(weather);
  }, []);

  return (
    <Container>
      {location && <Header city={location.name} country={location?.country} />}
      {weather && (
        <>
          <WeatherData
            temp={weather.temp}
            feelsLike={weather.feelsLike}
            text={weather.text}
          />
          <Flex>
            <DataItem
              value={weather.rain + "%"}
              icon="https://res.cloudinary.com/photocloudmichal/image/upload/v1648476952/weather/cloud/22_s4izwy.png"
            />
            <DataItem
              value={weather.wind + "km/h"}
              icon="https://res.cloudinary.com/photocloudmichal/image/upload/v1648477076/weather/sun/4_myogyi.png"
            />
            <DataItem
              value={weather.humidity + "%"}
              icon="https://res.cloudinary.com/photocloudmichal/image/upload/v1648476979/weather/sun/6_qcnlko.png"
            />
          </Flex>
        </>
      )}
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

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
