import { combineReducers } from "@reduxjs/toolkit";

import AppConfigurationReducer from "./features/app-configuration.slice";

const rootReducer = combineReducers({
  appConfiguration: AppConfigurationReducer,
});

export { rootReducer };
