import { createAsyncThunk, SerializedError, createSlice } from "@reduxjs/toolkit";

import { Api } from "@/services/api";
import { AppConstants } from "@/constants";
import { UserRequest, UserResponse } from "../models/user";

export const insertUser = createAsyncThunk<UserResponse, UserRequest>("user/insertUser", async (obj, api) => {
  const response = await Api.post<UserResponse>(AppConstants.ApiKeys.user.insertUser, obj);

  const { status } = response;

  if (status !== 201) {
    throw new Error("Something went wrong!");
  }

  return { success: true };
});

interface UserSliceState {
  isLoading: boolean;
  isSuccess?: boolean;
  error?: SerializedError;
}

const initialState: UserSliceState = {
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(insertUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload?.success;
      })
      .addCase(insertUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.error;
      });
  },
});

export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;
