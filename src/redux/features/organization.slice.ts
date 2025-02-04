import { createAsyncThunk, SerializedError, createSlice } from "@reduxjs/toolkit";

import { Api } from "@/src/services/api";
import { AppConstants } from "@/src/constants";
import { FetchOrganizationResponse } from "../models";

export const fetchOrganization = createAsyncThunk<FetchOrganizationResponse[], void>(
  "organization/fetchOrganization",
  async (_, api) => {
    const response = await Api.get<FetchOrganizationResponse[]>(AppConstants.ApiKeys.organization.fetchOrganization);

    const { data, status } = response;

    if (status !== 200) {
      throw new Error("Something went wrong!");
    }

    return data;
  },
);

interface OrganizationSliceState {
  isLoading: boolean;
  data?: FetchOrganizationResponse[];
  isSuccess?: boolean;
  error?: SerializedError;
}

const initialState: OrganizationSliceState = {
  isLoading: false,
  data: [],
  isSuccess: false,
  error: undefined,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    resetOrganizationState: (state) => {
      state.isLoading = false;
      state.data = [];
      state.isSuccess = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchOrganization.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchOrganization.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(fetchOrganization.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.isSuccess = false;
        state.error = action.error;
      });
  },
});

export const { resetOrganizationState } = organizationSlice.actions;

export default organizationSlice.reducer;
