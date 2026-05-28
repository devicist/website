import React, { useEffect } from "react";
import FooterCS from "./../components/sections/CaseStudy/FooterCS";

const CaseStudyLayout = ({ children }) => {
  useEffect(() => {
    if (window.history.length <= 1) {
      window.history.replaceState({}, "", "/#work");
      window.history.pushState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      <main className="site-content">{children}</main>
      <FooterCS />
    </>
  );
};

export default CaseStudyLayout;
