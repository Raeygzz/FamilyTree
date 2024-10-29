import { combineReducers } from "@reduxjs/toolkit";

import AppConfigurationReducer from "./features/app-configuration.slice";
import UserReducer from "./features/user.slice";

const rootReducer = combineReducers({
  appConfiguration: AppConfigurationReducer,
  user: UserReducer,
});

export { rootReducer };
