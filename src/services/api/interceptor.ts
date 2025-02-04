import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  // AxiosRequestConfig, // Change to InternalAxiosRequestConfig
  InternalAxiosRequestConfig,
} from "axios";

export async function requestInterceptor<I>(config: InternalAxiosRequestConfig<I>) {
  config.headers["apiKey"] = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
  config.headers["Authorization"] = `Bearer ${process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY}`;
  config.headers["Prefer"] = "return=minimal";

  return config;
}

export async function responseInterceptor<I>(Api: AxiosInstance, error: AxiosError<I>) {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as InternalAxiosRequestConfig;
    const { statusText, status } = (error.response as AxiosResponse) ?? {};

    console.log("url ====================> ", url);
    console.log("method ====================> ", method);
    console.log("status ====================> ", status);
    console.log("message ====================> ", message);
    console.log("statusText ====================> ", statusText);

    // const originalRequest = error.config;

    if (error?.response?.status === 401) {
      // if (error?.response?.status === 401 && !originalRequest?._retry) {
      // originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.

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

        // return Api(originalRequest); // Retry the original request with the new access token.
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
  }
}
