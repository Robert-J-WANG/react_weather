import { ReactNode, RefObject } from "react";

export type WeatherContextProviderPoros = {
  children: ReactNode;
};
export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type BtnEvent = React.MouseEvent<HTMLElement, MouseEvent>;
export type IptRef = RefObject<HTMLInputElement>;
export type BtnGroupRef = RefObject<HTMLDivElement>;

export type WeatherContextProps = {
  term: string;
  options: OptionProps[];
  city: OptionProps | null;
  onInputChange: (e: InputEvent) => void;
  onOptionSelect: (option: OptionProps) => void;
  onSearch: () => void;
};

export type OptionProps = {
  id: number;
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
  // Add more properties as needed
};
