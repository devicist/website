import React from "react";
import classNames from "classnames";
import FooterSocial from "./partials/FooterSocial";

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top footer-top-centered text-xxs">
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
