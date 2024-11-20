import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import "react-vertical-timeline-component/style.min.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Capabilities = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Capabilities",
  };

  return (
    <section className={outerClasses} id="capabilities">
      <div className="container capabilities-group">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="capabilities-list">
            <ul>
              <li>Fabrication</li>
              <li>Industrial Design</li>
              <li>Rapid Prototyping</li>
              <li>3D Printing</li>
              <li>Electronics and Robotics</li>
              <li>PCB Design and Fab</li>
              <li>LED and Kinetic Displays</li>
              <li>Apps and Software</li>
              <li>Computer Vision</li>
              <li>Projection Mapping</li>
              <li>Simulation</li>
              <li>Installation and Integration</li>
              <li>Remote Monitoring</li>
              <li>User Metrics</li>
            </ul>
          </div>
          {/* <div className="capabilities-note">
            <p>* Additional services available with our partners</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

Capabilities.propTypes = propTypes;
Capabilities.defaultProps = defaultProps;

export default Capabilities;
