import Joke from "./components/Joke";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { Container } from "react-bootstrap";
import { useWeatherContext } from "./context/useWeatherContext";

function App() {
  const { city } = useWeatherContext();
  return (
    <Container className="flexCenter flex-column gap-5">
      <Joke />
      {0 ? <Weather /> : <Search />}
    </Container>
  );
}

export default App;
