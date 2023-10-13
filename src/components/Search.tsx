import { InputGroup, Form, Button, ButtonGroup } from "react-bootstrap";
import { useWeatherContext } from "../context/useWeatherContext";
// import { useRef } from "react";

type Props = {};
// type ButtonEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Search({}: Props) {
  // const iptRef = useRef<HTMLInputElement>(null);
  // const btnGroupRef = useRef<HTMLDivElement>(null);
  const { onInputChange, options, onOptionSelect, term, onSearch } =
    useWeatherContext();

  return (
    <>
      <main
        className="flexCenter glassCss flex-column gap-2"
        style={{
          width: "60vw",
          height: "50vh",
        }}
      >
        <h1>
          Weather <span className="text-black fw-bolder">Forecast</span>
        </h1>
        <p className="text-center text-black-50">
          Enter below a place you want to know <br />
          the weather of and select an option from dropdown
        </p>
        <InputGroup className="w-50">
          <Form.Control
            // ref={iptRef}
            placeholder="City name"
            style={{
              fontSize: "20px",
            }}
            value={term}
            onChange={(e: InputEvent) => {
              onInputChange(e);
            }}
          />
          <Button
            variant="outline-secondary"
            className="border-white text-white"
            style={{
              fontSize: "20px",
            }}
            onClick={onSearch}
          >
            Search
          </Button>
          <ButtonGroup vertical>
            {options?.map((option, index) => (
              <Button
                key={option.id + "-" + index}
                variant="light"
                style={{
                  width: "30vw",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  onOptionSelect(option);
                }}
              >
                <span>{option.name}</span>
                <span>
                  {option.state}/{option.country}
                </span>
              </Button>
            ))}
          </ButtonGroup>
        </InputGroup>
      </main>
    </>
  );
}
