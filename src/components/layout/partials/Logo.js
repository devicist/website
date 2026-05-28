import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <Link to="/">
        <h4>Devicist</h4>
      </Link>
    </div>
  );
};

export default Logo;
