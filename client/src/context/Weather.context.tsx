import React, { createContext, ReactNode, useContext, useState } from "react";
import * as weatherApi from "../apis/ weather.action";
import { WeatherContextType, Weather } from "../types/weather";
import { LocationCord, Location } from "../types/location";
import routes from "../routes.json";

const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>();
  const [weather, setWeather] = useState<Weather>();
  const [forcast, setForcast] = useState<Array<any>>();

  const getCurrentWeather = async (currentCord: LocationCord) => {
    try {
      setLoading(true);
      const res = await weatherApi.getCurrentWeather(currentCord);
      setLocation({
        country: res.location.country,
        name: res.location.name,
        latitude: res.location.lat,
        longitude: res.location.lon,
      });
      setLocationWeather(res.current);
      console.log(res.forecast);
      setForcast(res.forecast.forecastday);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const setLocationWeather = (data: any): void => {
    const {
      is_day,
      temp_c,
      precip_in,
      feelslike_c,
      humidity,
      condition,
      wind_kph,
    } = data;
    setWeather({
      temp: temp_c,
      wind: wind_kph,
      text: condition.text,
      feelsLike: feelslike_c,
      icon: condition.icon,
      humidity,
      rain: precip_in,
      isDay: is_day === 1 ? true : false,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        loading,
        error,
        location,
        weather,
        forcast,
        getCurrentWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default function useAuth(): WeatherContextType {
  return useContext(WeatherContext);
}
