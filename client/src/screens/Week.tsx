import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import useWeather from "../context/Weather.context";
import routes from "../routes.json";
import assets from "../assets.json";

import { Header } from "../components/Week/index";

const Week = () => {
  const navigate = useNavigate();
  const { getCurrentWeather, location, weather, forcast } = useWeather();

  useEffect(() => {
    if (!weather || !forcast) navigate(routes.HOME);
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Week;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  background: linear-gradient(
    110deg,
    rgba(171, 202, 253, 1) 0%,
    rgba(87, 151, 252, 1) 100%
  );
`;
