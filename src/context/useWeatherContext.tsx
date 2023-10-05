import { ReactNode, createContext, useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/openWeatherApi";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;

type WeatherContextProps = {
  handlerOnChange: (e: InputEvent) => void;
  data: any; // Replace 'any' with the actual type of your API response data
  // loading: boolean;
};
const weatherContext = createContext({} as WeatherContextProps);

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const [data, setData] = useState(null);
  const handlerOnChange = (e: InputEvent) => {
    console.log(e.target.value);
    const [response, error, loading, fetchData] = useAxios({
      axiosInstance: axios, // Use your axios instance here
      method: "get",
      url: `/geo/1.0/direct?q=${e.target.value}&limit=5&appid=${apiKey}`, // Update with your API endpoint
    });
    setData(response);
  };
  console.log(data);
  return (
    <weatherContext.Provider value={{ handlerOnChange, data }}>
      {children}
    </weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
