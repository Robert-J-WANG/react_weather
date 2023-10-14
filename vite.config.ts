import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react_weather/",
  server: {
    proxy: {
      "/jokeApi": {
        rewrite: (path) => path.replace(/^\/jokeApi/, ""),
        target: "http://icanhazdadjoke.com",
        changeOrigin: true,
      },
      "/weatherApi": {
        target: "http://api.openweathermap.org", // 设置为第三方API的基础URL

        // "https://api.football-data.org/v4/matches",
        // "https://swapi.dev/api/planets/1/",
        // "https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=cdf05d929ed5cfa526764c43d2b832d2", // 设置为第三方API的基础URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weatherApi/, ""),
        headers: {
          // Optionally, you can set custom headers if needed
          // "User-Agent": "Your Custom User Agent",
        },
      },
    },
  },

  plugins: [react()],
});
