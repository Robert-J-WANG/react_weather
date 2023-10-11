import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// import axios from "../apis/openWeatherApi";
// import useAxios from "../hooks/useAxios";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
import axios from "axios";

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type BtnEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type IptRef = RefObject<HTMLInputElement>;
type BtnGroupRef = RefObject<HTMLDivElement>;
type WeatherContextProps = {
  handlerOnChange: (e: InputEvent, btnGroupRef: BtnGroupRef) => void;
  searchData: WeatherData[];
  value: string;
  getBtnValue: (e: BtnEvent, iptRef: IptRef) => void;
};
type WeatherData = {
  id: number;
  name: string; // Add more properties as needed
  state: string; // Add more properties as needed
  country: string; // Add more properties as needed
};

const weatherContext = createContext({} as WeatherContextProps);

export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  const [value, setValue] = useState(" ");
  const [searchData, setSearchData] = useState<WeatherData[]>([]); // Specify the type here
  const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;

  /* 
   // 使用封装的useAxios
  const myApi = `/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;
  const [response, err, loading, getWeather] = useAxios({
    axiosInstance: axios,
    method: "get",
    url: myApi, // 不需要包含/api前缀
    // url: "/", // 不需要包含/api前缀
    requestConfig: {
      headers: {
        "Content-Language": "en-US", //可添加新的配置项
        // Accept: "text/html", // 可重写配置项
      },
      data: {},
    },
  }); 
  */

  useEffect(() => {
    // console.log(value);
    if (value.trim() !== "") {
      const fetchData = async () => {
        const res = await axios.get<WeatherData[]>(myApi);
        // console.log(res);
        setSearchData(res.data);
      };
      fetchData();
    }
  }, [value]);

  const handlerOnChange = (e: InputEvent, btnGroupRef: BtnGroupRef) => {
    // console.log(e.target);
    const currentValue = e.target.value.trim();
    setValue(currentValue);
    // if (currentValue.trim() !== "") {
    //   getWeather();
    //   setSearchData(response);
    // }
    btnGroupRef.current!.style.display = currentValue ? "block" : "none";
  };

  const getBtnValue = (e: BtnEvent, iptRef: IptRef) => {
    const target = e.target as HTMLElement; // 类型断言为 HTMLElement
    if (target.classList.contains("btn")) {
      iptRef.current!.value = target.children[0].innerHTML;
    }
    target.parentElement!.style.display = "none";
  };

  return (
    <weatherContext.Provider
      value={{
        handlerOnChange,
        searchData,
        value,
        getBtnValue,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
