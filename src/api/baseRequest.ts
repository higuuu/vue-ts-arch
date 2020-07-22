import axios, { AxiosInstance, AxiosPromise, Method } from "axios";

const baseURL = "https://api.github.com";
const req: AxiosInstance = axios.create();
req.defaults.headers.post["Content-Type"] = "application/json";

export default <T, R>(
  method: Method,
  path: string,
  query?: string,
  body?: T
): AxiosPromise<R> => {
  return req({
    method: method,
    url: `${baseURL}/${path}`,
    params: query,
    data: body
  });
};
