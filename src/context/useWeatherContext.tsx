import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type WeatherContextProps = {
  handlerOnChange: (e: InputEvent) => void;
  names: string[];
};
type WeatherData = {
  name: string; // Add more properties as needed
};

const weatherContext = createContext({} as WeatherContextProps);

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const [value, setValue] = useState("london");
  const [searchData, setSearchData] = useState<WeatherData[]>([]); // Specify the type here
  const names: string[] = searchData.map((item) => item.name);
  const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get<WeatherData[]>(myApi);
      setSearchData(res.data);
    };
    fetchData();
  }, [value]);

  const handlerOnChange = (e: InputEvent) => {
    setValue(e.target.value.trim());
  };

  return (
    <weatherContext.Provider value={{ handlerOnChange, names }}>
      {children}
    </weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
