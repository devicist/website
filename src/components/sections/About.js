import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import headshot from "./../../assets/images/headshot_cropped.jpg";
import companyLogos from "./../../assets/images/companyLogos.png";
import "react-vertical-timeline-component/style.min.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const About = ({
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
    title: "About",
  };

  return (
    <section className={outerClasses} id="about">
      <div className="container mt-64">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="about">
            <div className="container-sm">
              <img
                src={headshot}
                alt="Headshot"
                className="portrait center-content"
              />
              <div className="container-sm txt">
                <b>Devicist</b> is the studio of <b>Nick Stedman</b>, a creative
                technologist and university lecturer with over 20 years of
                experience building innovative projects with electronics,
                coding, and fabrication. His robotic artworks have been
                showcased globally, including at Ars Electronica, the Ontario
                Science Center, and on Japanese TV. Since founding Devicist in
                2014, Nick and his team have partnered with companies, agencies,
                architects, and creators on diverse projects, from permanent
                installations to trade show centerpieces. Some of our clients:
              </div>
              <img src={companyLogos} alt="Company Logos" className="mt-64" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
