import { combineReducers } from "@reduxjs/toolkit";

import AppConfigurationReducer from "./features/app-configuration.slice";
import UserReducer from "./features/user.slice";
import OrganizationReducer from "./features/organization.slice";

const rootReducer = combineReducers({
  appConfiguration: AppConfigurationReducer,
  user: UserReducer,
  organization: OrganizationReducer,
});

export { rootReducer };
