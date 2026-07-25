import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const FluxLayout = ({ children }) => {
  useEffect(() => {
    if (window.history.length <= 1) {
      window.history.replaceState({}, "", "/#work");
      window.history.pushState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">{children}</main>
      <Footer />
    </>
  );
};

export default FluxLayout;
