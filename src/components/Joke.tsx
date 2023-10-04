import useAxios from "../hooks/useAxios";
import axios from "../apis/dadJoke";

// type Props = {};
export default function Joke() {
  const [response, err, loading] = useAxios({
    axiosInstance: axios,
    method: "get",
    // url: "/weather?q=beijing&appid=cdf05d929ed5cfa526764c43d2b832d2", // 不需要包含/api前缀
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
    <article>
      {loading && <p>Loading......</p>}
      {!loading && err && <p>{err}</p>}
      {!loading && !err && response && <div>{response.joke}</div>}
      {!loading && !err && !response && <div>no any dad jokes display</div>}
    </article>
  );
}
