import { createContext, useContext } from "react";
import {
  OptionProps,
  WeatherContextProviderPoros,
  InputEvent,
  ForecastProps,
} from "../type/index";
import useForecast from "../hooks/useForecase";

export type WeatherContextProps = {
  term: string;
  options: OptionProps[];
  forecast: ForecastProps | null;
  onInputChange: (e: InputEvent) => void;
  onOptionSelect: (option: OptionProps) => void;
  onSearch: () => void;
};
const weatherContext = createContext({} as WeatherContextProps);
export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const { onInputChange, options, term, onOptionSelect, onSearch, forecast } =
    useForecast();

  return (
    <weatherContext.Provider
      value={{
        onInputChange,
        options,
        term,
        onOptionSelect,
        onSearch,
        forecast,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}
export function useWeatherContext() {
  return useContext(weatherContext);
}
