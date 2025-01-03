import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollTop from "../../TopScroll";
function LayoutComponent({ children }) {
  return (
    <>
      <Header />

      <ScrollTop />
      {children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
