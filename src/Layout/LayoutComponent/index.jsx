import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollTop from "../../TopScroll";
function LayoutComponent({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <ScrollTop />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default LayoutComponent;
