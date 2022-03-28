import useGeoLocation from "../hooks/useGeoLocation";
import useWeather from "../context/Weather.context";
import { useEffect } from "react";

const Home = () => {
  const { getCurrentWeather } = useWeather();

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return <div>Home</div>;
};

export default Home;
