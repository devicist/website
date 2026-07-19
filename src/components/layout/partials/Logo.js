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
          viewBox="214 19 71 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polygon
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeMiterlimit="10"
            points="280.5 76.25 249.92 94.09 219.18 76.52 219.02 41.12 249.61 23.28 280.34 40.85 280.5 76.25"
          />
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeMiterlimit="10"
            points="249.92 94.09 249.76 58.69 219.02 41.12 249.76 58.69 280.34 40.85"
          />
        </svg>
        <h4>Devicist</h4>
      </Link>
    </div>
  );
};

export default Logo;
