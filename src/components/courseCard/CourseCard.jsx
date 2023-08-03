import "./CourseCard.css";

import React from "react";

const CourseCard = ({
  title,
  description,
  thumbnail,
  price,
  ratings,
  user,
}) => {
  return (
    <div className="course-card">
      <img src={thumbnail.secure_url} alt={title} className="course-image" />
      <div className="course-content">
        <h2 className="course-title">{title}</h2>
        <p className="course-description">
          {description.slice(0, 120) + "..."}
        </p>
        {price && <p className="course-price">${price}</p>}
        {ratings ? <p className="course-rating">Rating: {ratings}</p> : ""}
        {user.name && <p className="user-name">By: {user.name}</p>}
      </div>
    </div>
  );
};

export default CourseCard;
