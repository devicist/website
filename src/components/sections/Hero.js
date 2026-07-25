import React, { useEffect, useRef } from "react";
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
    className,
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    // topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
  );

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React sets `muted` as a DOM property, not a reflected attribute, so
    // react-snap's prerendered HTML omits it and browsers block the
    // unmuted autoplay attempt before hydration runs. Set the attribute
    // explicitly so it's present in both the live DOM and the snapshot.
    video.setAttribute("muted", "");
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section {...props} className={outerClasses}>
      <video ref={videoRef} className="videoBg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="container-sm">
        <div className={innerClasses}>
          <div style={{ padding: 30 }}>
            {/* <Image
              src={require("./../../assets/images/logo.svg")}
              alt="Open"
              width={200}
              height={32}
            /> */}
          </div>

          <div className="hero-content has-text-shadow">
            <div className="container-s has-text-shadow">
              <p
                className="m-0 mb-32 reveal-from-bottom h4-mobile"
                data-reveal-delay="400"
              >
                <span className="text-block">
                  Devicist builds sculptural machines
                </span>{" "}
                <span className="text-block">
                  that feel strangely alive through&nbsp;
                </span>
                <span className="text-block">movement, touch and presence</span>
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
