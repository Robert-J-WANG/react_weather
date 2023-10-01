import { ReactNode, createContext, useContext } from "react";

type WeatherContextProviderPoros = {
  children: ReactNode;
};

const weatherContext = createContext({});
export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  return (
    <weatherContext.Provider value={{}}>{children}</weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
