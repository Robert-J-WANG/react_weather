import Joke from "./components/Joke";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { Container } from "react-bootstrap";

function App() {
  const flag = 0;
  return (
    <Container className="flexCenter flex-column gap-5">
      <Joke />
      {flag === 0 ? <Search /> : <Weather />}
    </Container>
  );
}

export default App;
