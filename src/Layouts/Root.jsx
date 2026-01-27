import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../Shared/Header";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import MouseCursor from "../components/MouseCursor";
import BackToTop from "../components/BackToTop";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";

const Root = () => {
  return (
    <div>
      <Preloader />
      <ScrollToTop />
      <MouseCursor />
      <BackToTop />

      {/* <Header /> */}
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
