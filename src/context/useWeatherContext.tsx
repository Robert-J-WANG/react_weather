import {
  createContext,
  useContext,
  useEffect,
  // useEffect,
  useState,
} from "react";
// import axios from "../apis/openWeatherApi";
// import useAxios from "../hooks/useAxios";
// const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
// import axios from "axios";
import { getSearchOptions, getForecast } from "../hooks/useWeatherAxios";
import {
  OptionProps,
  WeatherContextProviderPoros,
  WeatherContextProps,
  InputEvent,
  // BtnEvent,
  // IptRef,
  // BtnGroupRef,
} from "../type/index";

const weatherContext = createContext({} as WeatherContextProps);
export function WeatherContextProvider({
  children,
}: WeatherContextProviderPoros) {
  // input 输入的内容
  const [term, setTerm] = useState<string>("");
  // input change时，获取api的数据
  const [options, setOptions] = useState<OptionProps[]>([]); // Specify the type here
  // click the list button, and store the option to the city value
  const [city, setCity] = useState<OptionProps | null>(null);
  const [forecast, setForecast] = useState({});

  // const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;

  /* -------------------- 方法1：使用自定义的钩子 -------------------- */
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

  /* ------------------ 方法2 使用useEffect钩子 ----------------- */
  // useEffect(() => {
  //   if (term.trim() !== "") {
  //     const fetchData = async () => {
  //       const res = await axios.get<WeatherData[]>(myApi);
  //       // console.log(res);
  //       setOptions(res.data);
  //     };
  //     fetchData();
  //   }
  // }, [term]);

  /* ------------------ 方法3：使用onChange事件 ------------------ */

  const onInputChange = async (e: InputEvent) => {
    const currentValue = e.target.value.trim();
    setTerm(currentValue);

    if (currentValue === "") return;
    const data = await getSearchOptions(currentValue);
    setOptions(data);

    // btnGroupRef.current!.style.display = currentValue ? "block" : "none";
  };

  // const onOptionSelect = (e: BtnEvent, iptRef: IptRef) => {
  //   const target = e.target as HTMLElement; // 类型断言为 HTMLElement
  //   if (target.classList.contains("btn")) {
  //     iptRef.current!.value = target.children[0].innerHTML;
  //   }
  //   target.parentElement!.style.display = "none";
  // };

  const onOptionSelect = async (option: OptionProps) => {
    setCity(option);
  };

  // 注册监听事件：当city变化时，更新input的value，同时清空options数组
  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  // 点击search按钮，调用api获取天气数据
  const onSearch = async () => {
    if (city) {
      const data = await getForecast(city.lat, city.lon);
      console.log(data);
    }
  };

  return (
    <weatherContext.Provider
      value={{
        onInputChange,
        options,
        term,
        onOptionSelect,
        onSearch,
        city,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(weatherContext);
}
