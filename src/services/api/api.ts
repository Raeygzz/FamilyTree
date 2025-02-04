import Axios from "axios";

import { AppConstants } from "@/src/constants";
import { formatErrorAndThrow } from "./error-mapper";
import { requestInterceptor, responseInterceptor } from "./interceptor";

const Api = Axios.create({
  baseURL: `${AppConstants.Config.Api.apiURL}`,
  timeout: AppConstants.Config.Api.maxConnectionTimeout,
  headers: {
    Connection: "close",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(requestInterceptor, formatErrorAndThrow);

Api.interceptors.response.use(
  (response) => response, // Directly return successful responses.
  async (error) => responseInterceptor(Api, error),
);

export { Api };
