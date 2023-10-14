import { ReactNode, RefObject } from "react";

export type WeatherContextProviderPoros = {
  children: ReactNode;
};
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type BtnEvent = React.MouseEvent<HTMLElement, MouseEvent>;
export type IptRef = RefObject<HTMLInputElement>;
export type BtnGroupRef = RefObject<HTMLDivElement>;

export type OptionProps = {
  id: number;
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
  // Add more properties as needed
};

export type ForecastProps = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          description: string;
          icon: string;
        }
      ];
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
    }
  ];
};
