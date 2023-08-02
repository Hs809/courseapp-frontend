import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import Image from "../assets/technology.png";
import CourseCard from "../components/courseCard/CourseCard";

const CoursesList = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log({ user });
  useEffect(() => {
    const userToken = Cookies.get("token");
    if (!userToken) {
      navigate("/signup");
    }
    // dispatch();
  });
  const courses = [
    {
      title: "Introduction to React",
      description: "Learn the basics of React.js framework.",
      image: Image,
      price: 49.99,
      rating: 4.5,
      userName: "John Doe",
    },
    {
      title: "Introduction to React",
      description: "Learn the basics of React.js framework.",
      image: Image,
      price: 49.99,
      rating: 4.5,
      userName: "John Doe",
    },
    {
      title: "Introduction to React",
      description: "Learn the basics of React.js framework.",
      image: Image,
      price: 49.99,
      rating: 4.5,
      userName: "John Doe",
    },
    {
      title: "Introduction to React",
      description: "Learn the basics of React.js framework.",
      image: Image,
      price: 49.99,
      rating: 4.5,
      userName: "John Doe",
    },
    // Add more courses here...
  ];
  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
      <Outlet />
    </div>
  );
};

export default CoursesList;
