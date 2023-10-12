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
import { getSearchOptions } from "../hooks/getSearchOptions";

type WeatherContextProviderPoros = {
  children: ReactNode;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type BtnEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type IptRef = RefObject<HTMLInputElement>;
type BtnGroupRef = RefObject<HTMLDivElement>;
type WeatherContextProps = {
  onInputChange: (e: InputEvent, btnGroupRef: BtnGroupRef) => void;
  options: WeatherData[];
  term: string;
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
  // input 输入的内容
  const [term, setTerm] = useState<string>("");
  // input change时，获取api的数据
  const [options, setOptions] = useState<WeatherData[]>([]); // Specify the type here
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

  const onInputChange = async (e: InputEvent, btnGroupRef: BtnGroupRef) => {
    const currentValue = e.target.value.trim();
    setTerm(currentValue);

    if (currentValue === "") return;
    const data = await getSearchOptions(currentValue);
    setOptions(data);

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
        onInputChange,
        options,
        term,
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
