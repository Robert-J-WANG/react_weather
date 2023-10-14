import { useWeatherContext } from "../context/useWeatherContext";
import Sunrise from "../icons/Sunrise";
import Sunset from "../icons/Sunset";
import Wind from "../icons/Wind";
import Humidity from "../icons/Humidity";
import { getSunTime } from "../utils";

type Props = {};
type DivContainerProps = {
  title: JSX.Element;
  content: string;
  des: string;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
};
const DivContainer = ({
  title,
  content,
  des,
}: DivContainerProps): JSX.Element => {
  return (
    <div
      className="glassCss flexCenter flex-column"
      style={{
        width: "50%",
        height: "20vh",
        borderRadius: "10px",
      }}
    >
      <p className="text-black">{title}</p>
      <p>{content}</p>
      <p className="text-secondary">{des}</p>
    </div>
  );
};
export default function Weather({}: Props) {
  const { forecast } = useWeatherContext();
  const today = forecast!.list[0];
  return (
    <div
      className="glassCss"
      style={{
        width: "60vw",
        height: "100%",
        paddingTop: "20px",
      }}
    >
      <section className="flexCenter flex-column">
        <h1 className="text-success">
          {forecast!.name}{" "}
          <span className="text-warning">{forecast!.country}</span>
        </h1>
        <h3 className="text-primary">
          <Degree temp={Math.round(today!.main.temp)} />
        </h3>
        <h4 className="text-info">
          {today.weather[0].main} ({today.weather[0].description})
        </h4>
        <h6>
          H:&nbsp;
          <Degree temp={Math.ceil(today!.main.temp_max)} />
          &nbsp;&nbsp;&nbsp; L:&nbsp;
          <Degree temp={Math.floor(today!.main.temp_min)} />
        </h6>
      </section>
      <section className="d-flex overflow-x-scroll m-5">
        {forecast!.list.map((item, index) => {
          return (
            <div
              key={index}
              className="flexCenter flex-column mx-2 flex-shrink-0 fs-6 text-light"
            >
              <h6>
                {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
              </h6>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <h6>
                <Degree temp={Math.round(item.main.temp)} />
              </h6>
            </div>
          );
        })}
      </section>

      <section className="d-flex justify-content-around gap-5 px-5 py-3">
        <div
          className="glassCss flexCenter flex-column gap-3 text-danger"
          style={{
            width: "50%",
            height: "20vh",
            borderRadius: "15px",
          }}
        >
          <Sunrise />
          <p className="text-success">{getSunTime(forecast!.sunrise)}</p>
        </div>
        <div
          className="glassCss flexCenter flex-column gap-3 text-primary"
          style={{
            width: "50%",
            height: "20vh",
            borderRadius: "15px",
          }}
        >
          <Sunset />
          <p className="text-warning">{getSunTime(forecast!.sunset)}</p>
        </div>
      </section>
      <section className="d-flex justify-content-around gap-5 px-5 py-3">
        <DivContainer
          title={<Wind />}
          content={forecast!.list[0].wind.speed + " km/h"}
          des={"gusts " + forecast!.list[0].wind.gust + "km/h"}
        />
        <DivContainer
          title={<Humidity />}
          content={forecast!.list[0].main.humidity + " deg"}
          des={"feels like " + forecast!.list[0].main.feels_like}
        />
      </section>
    </div>
  );
}
