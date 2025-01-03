import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollTop from "../../../TopScroll";
import { Helmet } from "react-helmet";

function LayoutComponent({ children }) {
  return (
    <>
      <Header />
      <Helmet>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="This is the portfolio of Nihat, a front-end developer"
        />
        <meta property="og:title" content="Nihat's Portfolio" />
        <meta
          property="og:description"
          content="Discover my skills, projects, and contact info."
        />
        <meta property="og:image" content="" />
      </Helmet>
      <ScrollTop />
      {children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
