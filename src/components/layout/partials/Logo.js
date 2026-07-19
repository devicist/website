import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <Link to="/" className="brand-link">
        <svg
          className="brand-cube"
          viewBox="88 0 104 118"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="7" strokeMiterlimit="10">
            <polyline points="187.41 66.22 187.5 85.8 170.59 95.66" />
            <polyline points="157.21 103.47 140.3 113.33 123.31 103.62" />
            <polyline points="109.85 95.93 92.86 86.22 92.77 66.64" />
            <polyline points="92.7 51.15 92.61 31.57 109.52 21.71" />
            <polyline points="122.91 13.9 139.81 4.04 156.81 13.75" />
            <polyline points="170.26 21.44 187.26 31.15 187.35 50.73" />
            <line x1="140.3" y1="113.33" x2="140.21" y2="93.76" />
            <polyline points="140.14 78.26 140.06 58.69 123.06 48.97" />
            <polyline points="109.61 41.29 92.61 31.57 109.61 41.29" />
            <polyline points="123.06 48.97 140.06 58.69 156.96 48.82" />
            <line x1="170.35" y1="41.01" x2="187.26" y2="31.15" />
          </g>
        </svg>
        <h4>Devicist</h4>
      </Link>
    </div>
  );
};

export default Logo;
