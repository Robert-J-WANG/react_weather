import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export function getCities(value: string) {
  const myApi = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`;
  async function fetchData() {
    const result = await axios({
      url: myApi,
    });
    // console.log(result.data);
    return result;
  }
  fetchData();
}
