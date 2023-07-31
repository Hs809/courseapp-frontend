import React from "react";

import { Outlet } from "react-router-dom";

import HeroSection from "../components/heroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default Home;
