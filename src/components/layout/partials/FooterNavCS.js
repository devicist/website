import React from "react";
import classNames from "classnames";
//import { Link } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";

const FooterNavCS = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/#work">Work</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavCS;
