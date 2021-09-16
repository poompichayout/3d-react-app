import React, { useEffect } from "react";

import HeaderNew from "src/components/HeaderNew";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import AboutUsTab from "src/components/AboutUsTab";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>Home - Cardiac Catheterization</title>
      </Helmet>
      <HeaderNew />
      <AboutUsTab />
    </>
  );
}

export default Home;
