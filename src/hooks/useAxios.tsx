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
  const [response, setResponse] = useState<any>(null); // Adjust the type accordingly
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log(res);
        setResponse(res.data);
      } catch (error: any) {
        console.log(error.message);
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // useEffect cleanup function
    return () => controller.abort();
  }, []);

  return [response, err, loading];
};

export default useAxios;
