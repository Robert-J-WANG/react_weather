import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJokeApi";
import { Button } from "react-bootstrap";

export default function Joke() {
  const [response, err, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "get",
    url: "/", // 不需要包含/api前缀
    requestConfig: {
      headers: {
        "Content-Language": "en-US", //可添加新的配置项
        // Accept: "text/html", // 可重写配置项
      },
      data: {},
    },
  });
  console.log(loading, err, response);
  return (
    <>
      <main
        className="flexCenter glassCss flex-column gap-1"
        style={{
          position: "relative",
          width: "60vw",
          height: "25vh",
        }}
      >
        <h2 className="text-primary">
          Dad's <span className="text-warning fw-bolder">Joke</span>
        </h2>
        <article className="text-success">
          {loading && <p>Loading......</p>}
          {!loading && err && <p>{err}</p>}
          {!loading && !err && response && <div>{response.joke}</div>}
          {!loading && !err && !response && <div>no any dad jokes display</div>}
        </article>
        <Button
          onClick={() => refetch()}
          style={{
            position: "absolute",
            top: "7vh",
            right: "-100px",
            height: "5vw",
            borderRadius: "50%",
          }}
        >
          get joke
        </Button>
      </main>
    </>
  );
}
