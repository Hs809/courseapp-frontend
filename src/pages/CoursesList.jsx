import React, { useEffect } from "react";

import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";

const CoursesList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = Cookies.get("token");
    console.log({ userToken });
    if (!userToken) {
      console.log("in");
      navigate("/signup");
    }
  });
  return (
    <div>
      CoursesList
      <Outlet />
    </div>
  );
};

export default CoursesList;
