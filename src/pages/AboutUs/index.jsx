import React from "react";
import { Helmet } from "react-helmet";
import AboutUsTab from "src/components/AboutUsTab";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Cardiac Catheterization</title>
      </Helmet>
      <div style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
        <AboutUsTab />
      </div>
    </>
  );
};

export default AboutUs;
