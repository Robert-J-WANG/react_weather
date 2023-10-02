import { ReactNode, createContext, useContext } from "react";

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;

type WeatherContextProps = {
  handlerOnChange: (e: InputEvent) => void;
};

const weatherContext = createContext({} as WeatherContextProps);
const api = import.meta.env.VITE_WEATHER_API_KEY;

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const handlerOnChange = (e: InputEvent) => {
    const value: string = e.target.value;
    console.log(api);
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
