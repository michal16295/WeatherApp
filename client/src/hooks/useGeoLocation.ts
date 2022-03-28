import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [lat, setLat] = useState<string>("");
  const [lng, setLng] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onSuccess = (location: any): void => {
    setLoaded(true);
    setLat(location.coords.latitude);
    setLng(location.coords.longitude);
  };

  const onError = (error: any): void => {
    setLoaded(true);
    setError(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { loaded, lat, lng, error };
};

export default useGeoLocation;
