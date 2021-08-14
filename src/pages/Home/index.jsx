import React from "react";

import Header from "src/components/Header";
import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Angiogram</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Header />
    </>
  );
}

export default Home;
