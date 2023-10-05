import axios from "axios";

// const BASE_URL = "http://icanhazdadjoke.com";
// const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=${apiKey}`;
// const BASE_URL = "https://swapi.dev/api/planets/1/";
const BASE_URL = "jokeApi/";
// const BASE_URL = "weatherApi/";
export default axios.create({
  baseURL: BASE_URL, // 使用代理的基础URL，Vite会将其重写并代理到第三方API
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
