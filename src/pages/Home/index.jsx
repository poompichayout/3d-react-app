import React from "react";

import HeaderNew from "src/components/HeaderNew";
import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Cardiac Catheterization</title>
      </Helmet>
      <HeaderNew />
    </>
  );
}

export default Home;
