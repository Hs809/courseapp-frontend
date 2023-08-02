import axios from "axios";
import Cookies from "js-cookie";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

// omit imports and state

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
  console.log({ response });
  Cookies.set("token", response.data.token);

  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // omit reducer cases
    // logout: state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
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
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
