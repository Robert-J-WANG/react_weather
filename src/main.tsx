import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { WeatherContextProvider } from "./context/useWeatherContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WeatherContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherContextProvider>
);
