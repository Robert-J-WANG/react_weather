import { ReactNode, createContext, useContext } from "react";

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;

type WeatherContextProps = {
  handlerOnChange: (e: InputEvent) => void;
};

const weatherContext = createContext({} as WeatherContextProps);
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const handlerOnChange = (e: InputEvent) => {
    const value: string = e.target.value;

    const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;

    console.log(myApi);
  };
  return (
    <weatherContext.Provider value={{ handlerOnChange }}>
      {children}
    </weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
