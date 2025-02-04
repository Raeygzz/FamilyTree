import { createAsyncThunk, SerializedError, createSlice } from "@reduxjs/toolkit";

import { Api } from "@/src/services/api";
import { AppConstants } from "@/src/constants";
import { FetchHeadsResponse, FetchUsersResponse, UserRequest, UserResponse } from "../models";

export const fetchHeads = createAsyncThunk<FetchHeadsResponse[], void>("user/fetchHeads", async (_, api) => {
  const response = await Api.get<FetchHeadsResponse[]>(AppConstants.ApiKeys.heads.fetchHeads);

  const { data, status } = response;

  if (status !== 200) {
    throw new Error("Something went wrong!");
  }

  return data;
});

export const fetchUsers = createAsyncThunk<FetchUsersResponse[], void>("user/fetchUsers", async (_, api) => {
  const response = await Api.get<FetchUsersResponse[]>(AppConstants.ApiKeys.user.fetchUsers);

  const { data, status } = response;

  if (status !== 200) {
    throw new Error("Something went wrong!");
  }

  // let filterParents: FetchUsersResponse[] = [];
  // if (data?.length > 0) {
  //   filterParents = data.filter((obj) => {
  //     if (obj?.parent_id === null) return obj;
  //   });
  // }

  return data;
  // return filterParents;
});

export const insertUser = createAsyncThunk<UserResponse, UserRequest>("user/insertUser", async (obj, api) => {
  const response = await Api.post<UserResponse>(AppConstants.ApiKeys.user.insertUser, obj);

  const { status } = response;

  if (status !== 201) {
    throw new Error("Something went wrong!");
  }

  return { success: true };
});

interface FetchHeads {
  isLoading: boolean;
  data?: FetchHeadsResponse[];
  isSuccess?: boolean;
  error?: SerializedError;
}

interface FetchUsers {
  isLoading: boolean;
  data?: FetchUsersResponse[];
  isSuccess?: boolean;
  error?: SerializedError;
}

interface InsertUser {
  isLoading: boolean;
  isSuccess?: boolean;
  error?: SerializedError;
}
interface UserSliceState {
  fetchHeads: FetchHeads;
  fetchUsers: FetchUsers;
  inserUser: InsertUser;
}

const initialState: UserSliceState = {
  fetchHeads: {
    isLoading: false,
    data: [],
    isSuccess: false,
    error: undefined,
  },
  fetchUsers: {
    isLoading: false,
    data: [],
    isSuccess: false,
    error: undefined,
  },
  inserUser: {
    isLoading: false,
    isSuccess: false,
    error: undefined,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.fetchHeads.isLoading = false;
      state.fetchHeads.data = [];
      state.fetchHeads.isSuccess = false;
      state.fetchHeads.error = undefined;

      state.fetchUsers.isLoading = false;
      state.fetchUsers.data = [];
      state.fetchUsers.isSuccess = false;
      state.fetchUsers.error = undefined;

      state.inserUser.isLoading = false;
      state.inserUser.isSuccess = false;
      state.inserUser.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(insertUser.pending, (state) => {
        state.inserUser.isLoading = true;
        state.inserUser.isSuccess = false;
      })
      .addCase(insertUser.fulfilled, (state, { payload }) => {
        state.inserUser.isLoading = false;
        state.inserUser.isSuccess = payload?.success;
      })
      .addCase(insertUser.rejected, (state, action) => {
        state.inserUser.isLoading = false;
        state.inserUser.isSuccess = false;
        state.inserUser.error = action.error;
      })

      .addCase(fetchHeads.pending, (state) => {
        state.fetchHeads.isLoading = true;
        state.fetchHeads.isSuccess = false;
      })
      .addCase(fetchHeads.fulfilled, (state, { payload }) => {
        state.fetchHeads.isLoading = false;
        state.fetchHeads.data = payload;
        state.fetchHeads.isSuccess = true;
      })
      .addCase(fetchHeads.rejected, (state, action) => {
        state.fetchHeads.isLoading = false;
        state.fetchHeads.data = [];
        state.fetchHeads.isSuccess = false;
        state.fetchHeads.error = action.error;
      })

      .addCase(fetchUsers.pending, (state) => {
        state.fetchUsers.isLoading = true;
        state.fetchUsers.isSuccess = false;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.fetchUsers.isLoading = false;
        state.fetchUsers.data = payload;
        state.fetchUsers.isSuccess = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.fetchUsers.isLoading = false;
        state.fetchUsers.data = [];
        state.fetchUsers.isSuccess = false;
        state.fetchUsers.error = action.error;
      });
  },
});

export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;
