import Joke from "./components/Joke";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { Container } from "react-bootstrap";
import { useWeatherContext } from "./context/useWeatherContext";

function App() {
  const { forecast } = useWeatherContext();
  return (
    <Container className="flexCenter flex-column gap-5">
      {forecast ? null : <Joke />}
      {forecast ? <Weather /> : <Search />}
    </Container>
  );
}

export default App;
