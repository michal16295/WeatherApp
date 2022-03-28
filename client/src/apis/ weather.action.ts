import httpService from "./httpService";
import routes from "./routes";
import globalConstants from "../constants/globalConstants";
import { Location } from "../types/location";

export const getCurrentWeather = async (
  location: Location | undefined
): Promise<any> => {
  try {
    const res = await httpService.get(
      `${routes.CURRENT_WEATHER}?key=${globalConstants.API_KEY}&q=London&aqi=no`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
