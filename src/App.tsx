import Joke from "./components/Joke";
// import Search from "./components/Search";
// import Weather from "./components/Weather";
import { Container } from "react-bootstrap";

function App() {
  // const flag = 0;
  return (
    <Container className="d-flex justify-content-center align-items-center">
      {/* {flag === 0 ? <Search /> : <Weather />} */}
      <Joke />
    </Container>
  );
}

export default App;
