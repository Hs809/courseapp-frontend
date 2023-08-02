import axios from "axios";
import Cookies from "js-cookie";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const signup = createAsyncThunk("user/signup", async (payload) => {
  const response = await axios.post(
    "http://localhost:4000/api/v1/signup",
    payload
  );
  console.log({ response });
  Cookies.set("token", response.data.token);

  return response;
});
export const login = createAsyncThunk("user/login", async (payload) => {
  const response = await axios.post(
    "http://localhost:4000/api/v1/login",
    payload
  );
  Cookies.set("token", response.data.token);
  return response;
});
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async () => {
    console.log("in create async");
    const response = await axios.get(
      "http://localhost:4000/api/v1/userDetails",
      {
        withCredentials: true,
      }
    );
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // omit reducer cases
    // logout: state,
    logout: (state) => {
      state = {
        data: {},
        isLoading: false,
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;

export const { logout } = userSlice.actions;
