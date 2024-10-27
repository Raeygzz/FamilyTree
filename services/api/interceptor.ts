import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Api } from "./api";

Api.interceptors.request.use(
  (request) => {
    const accessToken = AsyncStorage.getItem("accessToken");

    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  (response) => response, // Directly return successful responses.

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

      try {
        const refreshToken = AsyncStorage.getItem("refreshToken"); // Retrieve the stored refresh token.

        // Make a request to your auth server to refresh the token.
        const response = await axios.post("https://your.auth.server/refresh", {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Store the new access and refresh tokens.
        AsyncStorage.setItem("accessToken", accessToken);
        AsyncStorage.setItem("refreshToken", newRefreshToken);

        // Update the authorization header with the new access token.
        Api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

        return Api(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error("Token refresh failed:", refreshError);
        AsyncStorage.removeItem("accessToken");
        AsyncStorage.removeItem("refreshToken");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // For all other errors, return the error as is.
  },
);
