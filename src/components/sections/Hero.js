import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import videoBg from "../../assets/videos/videoBg-newFootage2.mp4";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    // topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <video className="videoBg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="container-sm">
        <div className={innerClasses}>
          <div style={{ padding: 30 }}>
            <Image
              src={require("./../../assets/images/logo.svg")}
              alt="Open"
              width={200}
              height={32}
            />
          </div>

          <div className="hero-content has-text-shadow">
            <h1
              className="mt-0 mb-16 reveal-from-bottom has-text-shadow"
              data-reveal-delay="200"
            >
              Digital Meets Physical
            </h1>
            <div className="container-s has-text-shadow">
              <p
                className="m-0 mb-32 reveal-from-bottom h4-mobile"
                data-reveal-delay="400"
              >
                <span className="text-block">
                  From hand-held devices to&nbsp;
                </span>
                <span className="text-block">large-scale installations,</span>
                <br />
                <span className="text-block">
                  we blend art and technology&nbsp;
                </span>
                <span className="text-block">to create</span>
                <br />
                <span className="text-block">immersive experiences for</span>
                <br />
                <span className="text-block">physical spaces.</span>
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
