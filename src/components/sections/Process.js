import React from "react";
import classNames from "classnames";
import { HashLink as Link } from "react-router-hash-link";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
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
    title: "Process",
    // paragraph: "We",
  };

  return (
    <section className={outerClasses} id="process">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <VerticalTimeline lineColor="#adb5bd8f">
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/FoundationIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Foundation</h3>
              <p>
                Whether you have a project in mind or want to explore
                possibilities, we have the experience and passion to help you
                achieve your creative goals.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/DesignIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Design</h3>
              <p>
                We talk to stakeholders, research, ideate, source, model and
                detail until the correct design is reached. We engineer simple,
                robust solutions optimized for fast delivery.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/BuildIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Build</h3>
              <p>
                We'll build your project in whole, or as part of your team,
                developing visualizations, prototypes and finished products as
                needed.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/DeployIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Deploy</h3>
              <p>
                We integrate our work into your project or space ensuring each
                element surpasses expectations.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/SupportIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Support</h3>
              <p>
                We provide in-person and remote support. We can push updates to
                keep the content fresh and collect user metrics to measure
                results.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/*
          
          
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/FoundationIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Foundation</h3>
                <p className="m-0">
                  With over 20 years' experience combining art, UX, and
                  engineering, we use our skills to take big ideas and make them
                  tangible, while mitigating risks.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/DesignIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="mt-0 mb-12">Design</h3>
                <p className="m-0">
                  We work closely with clients to clarify objectives, and
                  iterate through research, ideation, sourcing, modeling and
                  detailing until we arrive at the optimal design.
                </p>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/PrototypeIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Build</h3>
                <p className="m-0">
                  We develop code, build electronics, fabricate objects, and
                  integrate components into the final pieces. Along the way, we
                  develop hands-on prototypes, simulations and tools that help
                  stakeholders sort out details.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >

              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/DeployIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Deploy</h3>
                <p className="m-0">
                  Show time! This is the moment when the project goes live, and
                  public engagement begins. We are there to deliver and install
                  the project and ensure it is fully functional. We also study
                  the results to measure success.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                {" "}
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/SupportIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Support</h3>
                <p className="m-0">
                  Obsessed with reliability, we engineer simple, robust and
                  modular solutions. We maintain the project over it's lifetime
                  through in-person and remote support, and can push updates to
                  keep the content fresh.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >

              </div>
            </div>
          </div>

                */}
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
