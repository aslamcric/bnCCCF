import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../Shared/Header";
import Header3 from "../Shared/Header3";
import Footer from "../Shared/Footer";
import MouseCursor from "../components/MouseCursor";
import BackToTop from "../components/BackToTop";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <MouseCursor />
      <BackToTop />

      {/* <Header /> */}
      <Header3 />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
