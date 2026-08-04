import React from "react";
import classNames from "classnames";
import backArrow from "../../../assets/images/backArrow.svg";
import { HashLink } from "react-router-hash-link";
import VideoEmbed from "../../elements/VideoEmbed";

const Intro = (IntroContent) => {
  const outerClasses = classNames("cs-hero section center-content");

  const innerClasses = classNames("hero-inner section-inner");

  return (
    <section className={outerClasses}>
      <img
        alt="design wireframe background"
        src={IntroContent.imgSrc}
        width={500}
        style={{ position: "absolute", opacity: "30%", marginTop: "20px" }}
      />
      <div className="container-sm">
        {!IntroContent.hideBackArrow && (
          <HashLink to="/#work">
            <img
              src={backArrow}
              alt="back arrow"
              width={40}
              className="mt-32 mb-32 ft-l"
              style={{ position: "relative", zIndex: "10" }}
            />
          </HashLink>
        )}
        <div className={innerClasses}>
          <div className="cs-hero-content">
            {!IntroContent.hideCaseStudyLabel && (
              <h3 className="mt-16 mb-16 ta-l reveal-from-bottom">
                Case Study:
              </h3>
            )}
            <h1 className="mt-0 mb-16 ta-l reveal-from-bottom">
              {IntroContent.title}
            </h1>
            <div className="container-s">
              <p className="m-0 ta-l reveal-from-bottom">
                {IntroContent.description}
              </p>

              <div className="reveal-from-bottom mt-32" data-reveal-delay="600">
                <VideoEmbed
                  embedId={IntroContent.videoUrl}
                  className={IntroContent.videoClassName}
                  posterSrc={IntroContent.videoPosterSrc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
