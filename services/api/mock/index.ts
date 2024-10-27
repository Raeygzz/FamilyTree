import MockAdapter from "axios-mock-adapter";

import { Api } from "../api";

interface MockAdapterOptions {
  delayResponse?: number;
  onNoMatch?: "passthrough" | "throwException";
}

export default function mockApi(options: MockAdapterOptions = { delayResponse: 1000 }) {
  const apiMock = new MockAdapter(Api, options);

  apiMock.onGet("AppConstants.ApiKeys.").reply(() => [
    200,
    {
      status: "SUCCESS",
      message: "",
      data: [],
    },
  ]);

  return { apiMock };
}
