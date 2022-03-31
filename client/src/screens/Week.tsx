import { useEffect } from "react";
import styled from "styled-components";

import useWeather from "../context/Weather.context";

import {
  Header,
  WeatherData,
  DataItem,
  FlatList,
} from "../components/Home/index";
import assets from "../assets.json";

const Week = () => {
  const { getCurrentWeather, location, weather, forcast } = useWeather();

  return <Container></Container>;
};

export default Week;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
`;
