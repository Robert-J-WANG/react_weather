import { InputGroup, Form, Button } from "react-bootstrap";
import { useWeatherContext } from "../context/useWeatherContext";

type Props = {};
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Search({}: Props) {
  const flexCenter = "d-flex justify-content-center align-items-center ";
  const { handlerOnChange } = useWeatherContext();
  return (
    <>
      <main
        className={flexCenter + "glassCss flex-column gap-2"}
        style={{
          width: "50vw",
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
            placeholder="City name"
            style={{
              fontSize: "20px",
            }}
            onChange={(e: InputEvent) => {
              handlerOnChange(e);
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
        </InputGroup>
      </main>
    </>
  );
}
