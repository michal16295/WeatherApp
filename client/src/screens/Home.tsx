import { useEffect } from "react";
import styled from "styled-components";

import useGeoLocation from "../hooks/useGeoLocation";
import useWeather from "../context/Weather.context";

import {
  Header,
  WeatherData,
  DataItem,
  FlatList,
} from "../components/Home/index";
import assets from "../assets.json";

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
            isDay={weather.isDay}
          />
          <Flex>
            <DataItem value={weather.rain + "%"} icon={assets.day.cloud.rain} />
            <DataItem value={weather.wind + "km/h"} icon={assets.wind} />
            <DataItem value={weather.humidity + "%"} icon={assets.humid} />
          </Flex>
          <FlatList />
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
