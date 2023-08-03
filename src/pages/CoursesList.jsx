import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import CourseCard from "../components/courseCard/CourseCard";
import { getCourseList } from "../features/courseSlice";

const CoursesList = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const courses = useSelector((state) => state.course.data.course) || [];

  const dispatch = useDispatch();
  console.log({ courses });
  useEffect(() => {
    const userToken = Cookies.get("token");
    if (!userToken) {
      navigate("/signup");
    }
    dispatch(getCourseList());
  }, []);
  return (
    <div className="course-list">
      {courses.length
        ? courses.map((course, index) => <CourseCard key={index} {...course} />)
        : ""}
      <Outlet />
    </div>
  );
};

export default CoursesList;
