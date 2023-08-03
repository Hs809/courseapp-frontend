import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

export const getCourseList = createAsyncThunk(
  "course/getCourseList",
  async () => {
    const response = await axios.get("http://localhost:4000/api/v1/courses", {
      withCredentials: true,
    });
    return response;
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourseList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(getCourseList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default courseSlice.reducer;

export const { logout } = courseSlice.actions;
