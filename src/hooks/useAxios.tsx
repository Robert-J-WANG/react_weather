import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

type ConfigObjProps = {
  axiosInstance: AxiosInstance;
  method: "get" | "post" | "put" | "delete"; // Specify the available HTTP methods
  url: string;
  requestConfig?: AxiosRequestConfig;
};

const useAxios = (configObj: ConfigObjProps) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;
  const [response, setResponse] = useState<any>({}); // Adjust the type accordingly
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // console.log("useEffect executed"); // 添加这行日志
    let abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](url, {
          ...requestConfig,
          signal: abortController.signal,
        });
        console.log(res.data);
        setResponse(res.data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          setErr(error.message);
          throw error;
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      abortController.abort();
      console.log("useEffect cleanup"); // 添加这行日志
    };
  }, []);

  return [response, err, loading];
};

export default useAxios;
