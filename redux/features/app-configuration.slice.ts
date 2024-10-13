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
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    resetState: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setIsAuthenticated, resetState } = appConfigurationSlice.actions;

export default appConfigurationSlice.reducer;
