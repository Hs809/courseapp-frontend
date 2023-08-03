import "../css/CourseDetail.css";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneCourse } from "../features/courseSlice";

const CourseDetail = () => {
  const params = useParams();
  console.log({ params });
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.courseDetail);
  useEffect(() => {
    dispatch(getOneCourse(params.courseID));
  }, []);
  const handlePurchase = () => {
    // Add logic here to handle the purchase action
    // For example, redirect to a payment page or show a modal
  };

  return (
    <div className="course-container">
      <img
        className="course-thumbnail"
        src={course.thumbnail.secure_url}
        alt="Course Thumbnail"
      />
      <h1 className="course-title">{course.title}</h1>
      <p className="course-description">{course.description}</p>
      <p className="course-price">{course.price} RS</p>
      <div className="course-ratings">
        <p>
          {course.ratings} <span>/ 5</span>
        </p>
        {/* You can use icons for ratings if you prefer */}
      </div>
      <p className="course-reviews">{course.reviews}</p>
      <button className="purchase-button" onClick={handlePurchase}>
        Buy Now
      </button>
    </div>
  );
};

export default CourseDetail;
