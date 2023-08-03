import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: {},
  courseDetail: {},
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

export const getOneCourse = createAsyncThunk(
  "course/getOneCourse",
  async (courseID) => {
    const response = await axios.get(
      `http://localhost:4000/api/v1/course/${courseID}`,
      {
        withCredentials: true,
      }
    );
    console.log({ response });
    return response.data;
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
        state.courseList = action.payload.data;
      })
      .addCase(getCourseList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getOneCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOneCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log({ data: action.payload.course });
        state.courseDetail = action.payload.course;
      })
      .addCase(getOneCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export default courseSlice.reducer;

export const { logout } = courseSlice.actions;
