import Axios from "axios";

import { AppConstants } from "@/constants";

const Api = Axios.create({
  baseURL: `${AppConstants.Config.Api.apiURL}`,
  timeout: AppConstants.Config.Api.maxConnectionTimeout,
  headers: {
    Connection: "close",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { Api };
