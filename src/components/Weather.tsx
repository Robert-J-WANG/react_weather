import { useWeatherContext } from "../context/useWeatherContext";

type Props = {};

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>o</sup>
    </span>
  );
};
export default function Weather({}: Props) {
  const { forecast } = useWeatherContext();
  const today = forecast!.list[0];
  return (
    <>
      <div
        className="glassCss"
        style={{
          width: "60vw",
          height: "100vh",
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
        <section className="d-flex overflow-x-scroll m-3">
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

        <section className="d-flex justify-content-around gap-3 p-3">
          <div
            className="glassCss"
            style={{
              width: "33%",
              height: "30vh",
            }}
          >
            1
          </div>
          <div
            className="glassCss"
            style={{
              width: "33%",
              height: "30vh",
            }}
          >
            1
          </div>
          <div
            className="glassCss"
            style={{
              width: "33%",
              height: "30vh",
            }}
          >
            1
          </div>
        </section>
      </div>
    </>
  );
}
