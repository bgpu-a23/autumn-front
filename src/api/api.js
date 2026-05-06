import axios from "axios";
import { responseInterceptor } from "./response";

export const baseURL = location.origin + "/api/v1";

export const api = axios.create({
  baseURL: `${location.origin}/api/v1`,
  timeout: 12000,
});


api.interceptors.response.use(
  responseInterceptor().onFullfilled,
  responseInterceptor().onRejected
);