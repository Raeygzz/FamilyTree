import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "./store";

// write selector function for app session
const selectSession = (state: RootState) => state.appConfiguration.isAuthenticated;

export const selectUserLoginState = createSelector([selectSession], (session) => {
  return session;
});
