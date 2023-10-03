import { ReactNode, createContext, useContext } from "react";
import { getCities } from "../hooks/getCities";

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;

type WeatherContextProps = {
  handlerOnChange: (e: InputEvent) => void;
};

const weatherContext = createContext({} as WeatherContextProps);

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const handlerOnChange = (e: InputEvent) => {
    const value: string = e.target.value;
    console.log(getCities(value));
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
