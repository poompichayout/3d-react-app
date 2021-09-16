import React from "react";
import { Outlet } from "react-router-dom";
import AboutUsTab from "src/components/AboutUsTab";
import NavBar from "src/components/NavBar";

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <AboutUsTab />
    </div>
  );
};

export default HomeLayout;
