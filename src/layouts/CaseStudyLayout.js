import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import FooterCS from "./../components/sections/CaseStudy/FooterCS";
import backArrow from "./../assets/images/backArrow.svg";

const CaseStudyLayout = ({ children }) => {
  useEffect(() => {
    if (window.history.length <= 1) {
      window.history.replaceState({}, "", "/#work");
      window.history.pushState({}, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      <header className="cs-sticky-header">
        <div className="container">
          <HashLink to="/#work" className="cs-back-link">
            <img src={backArrow} alt="back" width={18} />
            <span>Back to Portfolio</span>
          </HashLink>
        </div>
      </header>
      <main className="site-content cs-with-sticky-header">{children}</main>
      <FooterCS />
    </>
  );
};

export default CaseStudyLayout;
