import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getSearchOptions = async (value: string) => {
  const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;

  try {
    const res = await axios.get(myApi);
    return res.data;
  } catch (error) {
    throw error; // 你可以根据需要处理错误
  }
};