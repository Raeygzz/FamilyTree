import type { AxiosError } from "axios";
import NetInfo from "@react-native-community/netinfo";
import type { NetInfoState } from "@react-native-community/netinfo";

export const StatusCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
};

export const Messages = {
  CONFLICT: "conflict",
  UNEXPECTED: "unexpected",
  BAD_REQUEST: "bad_request",
  NOT_ALLOWED: "not_allowed",
  UNAUTHORIZED: "unauthorized",
  GENERAL_NETWORK_ERROR: "general",
  SERVER_NOT_RESPONDING: "server_not_responding",
  NO_INTERNET_CONNECTION: "no_internet_connection",
};

function errorCodeMessage(code?: number): string {
  switch (code) {
    case StatusCode.UNAUTHORIZED:
      return Messages.UNAUTHORIZED;
    case StatusCode.RESOURCE_NOT_FOUND:
      return Messages.GENERAL_NETWORK_ERROR;
    case StatusCode.METHOD_NOT_ALLOWED:
      return Messages.NOT_ALLOWED;
    case StatusCode.FORBIDDEN:
    case StatusCode.CONFLICT:
      return Messages.CONFLICT;
    case StatusCode.BAD_REQUEST:
      return Messages.BAD_REQUEST;
    default:
      return Messages.UNEXPECTED;
  }
}
