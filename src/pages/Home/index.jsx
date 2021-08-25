import React from "react";

import Header from "src/components/Header";
import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Cardiac Catheterization</title>
      </Helmet>
      <Header />
    </>
  );
}

export default Home;
