import { InputGroup, Form, Button, ButtonGroup } from "react-bootstrap";
import { useWeatherContext } from "../context/useWeatherContext";
import { useRef } from "react";

type Props = {};
type ButtonEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Search({}: Props) {
  const iptRef = useRef<HTMLInputElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);
  const { handlerOnChange, searchData, getBtnValue } = useWeatherContext();

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
            ref={iptRef}
            placeholder="City name"
            style={{
              fontSize: "20px",
            }}
            onChange={(e: InputEvent) => {
              handlerOnChange(e, btnGroupRef);
            }}
          />
          <Button
            variant="outline-secondary"
            className="border-white text-white"
            style={{
              fontSize: "20px",
            }}
          >
            Search
          </Button>
          <ButtonGroup
            ref={btnGroupRef}
            vertical
            onClick={(e: ButtonEvent) => {
              getBtnValue(e, iptRef);
            }}
          >
            {searchData?.map((item, index) => (
              <Button
                key={index}
                variant="light"
                style={{
                  width: "30vw",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.name}</span>
                <span>
                  {item.state}/{item.country}
                </span>
              </Button>
            ))}
          </ButtonGroup>
        </InputGroup>
      </main>
    </>
  );
}
