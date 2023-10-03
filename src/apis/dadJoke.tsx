import axios from "axios";

// const BASE_URL = "http://icanhazdadjoke.com";
// const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=${apiKey}`;

export default axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
