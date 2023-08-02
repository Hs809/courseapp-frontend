import "./CourseCard.css";

import React from "react";

const CourseCard = ({ title, description, image, price, rating, userName }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h2 className="course-title">{title}</h2>
        <p className="course-description">{description}</p>
        {price && <p className="course-price">${price}</p>}
        {rating && <p className="course-rating">Rating: {rating}</p>}
        {userName && <p className="user-name">By: {userName}</p>}
      </div>
    </div>
  );
};

export default CourseCard;
