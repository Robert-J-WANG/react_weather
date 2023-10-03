import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJoke";

// type Props = {};
export default function Joke() {
  const [response, err, loading] = useAxios({
    axiosInstance: axios,
    method: "get",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US", //可添加新的配置项
        // Accept: "text/html", // 可重写配置项
      },
      data: {},
    },
  });
  console.log(loading, response, err);
  return (
    <article>
      {loading && <p>Loading......</p>}
      {!loading && !err && <p>{err}</p>}
      {!loading && !err && response && <div>{response}</div>}
      {!loading && !err && !response && <div>no any dad jokes display</div>}
    </article>
  );
}
