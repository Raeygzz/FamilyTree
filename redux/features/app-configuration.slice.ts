import { createSlice } from "@reduxjs/toolkit";

export interface AppConfiguration {
  isAuthenticated: boolean;
}

const initialState: AppConfiguration = {
  isAuthenticated: false,
};

const appConfigurationSlice = createSlice({
  name: "appConfiguration",
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },

    resetAppConfigurationState: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setIsAuthenticated, resetAppConfigurationState } = appConfigurationSlice.actions;

export default appConfigurationSlice.reducer;
