import Weather from "./components/Weather";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Weather />
    </Container>
  );
}

export default App;
