import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../elements/Button";
import flux from "./../../assets/images/portfolio/fluxCoverNew.mp4";
// import wheel from "../../assets/images/portfolio/braking/brakingCsCover.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//import PortfolioMore from '../layout/partials/PortfolioMore';
import ProjectModal from "./ProjectModal";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Portfolio = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const innerClasses = classNames(
    "portfolio-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "center-content mt-16 container",
    pushLeft && "push-left"
  );

  const Project1ModalContent = {
    title: "LED lighting",
    body: "We developed interactive LED lighting for studio F-Minus' 30 foot holiday sculpture. A large illuminated snowflake occupies the atrium of Brookfield Place in Toronto. Touching the surface causes the colors to shift",
    videoUrl: "https://www.youtube.com/embed/cyy3FVcJ6sU",
    images: [
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake1.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake2.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/inShop.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake4.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project2ModalContent = {
    title: "Regenerative Braking Demo",
    body: "To profile KIA's regenerative braking technology, we developed an interactive demo. Users press car pedals to drive and brake a full size car wheel mounted in a kiosk. The brake also recharges a virtual battery displayed on the dashboard.",
    videoUrl: "https://www.youtube.com/embed/Dm9ksx5k4pc",
    images: [
      {
        src: require("./../../assets/images/portfolio/braking/emailSketch.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/wheel_sim.gif"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/model.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/wheelBuildCropped.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/kiosk_unfinished.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/wheelBuild.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project3ModalContent = {
    title: "Illuminated Brain",
    body: "Interactive model of a brain that responds to touch, displaying various patterns. Produced in collaboration with Globacore Interactive for Dassault Systèmes's Digital Twin exhibit at CES 2023.",
    videoUrl: "https://www.youtube.com/embed/NIznK_WQr6A",
    images: [
      {
        src: require("./../../assets/images/portfolio/brain/brainFeature.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/brain/brain2.JPG"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/brain/brain3.JPG"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/brain/brain4.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  //edit section header content here
  const sectionHeader = {
    title: "Featured Projects",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  const [openP1, setOpenP1] = useState(false);
  const [openP2, setOpenP2] = useState(false);
  const [openP3, setOpenP3] = useState(false);
  const modalOpen = useRef(false);

  const onOpenModalP1 = () => { setOpenP1(true); window.history.pushState({ type: "modal" }, ""); modalOpen.current = true; };
  const onOpenModalP2 = () => { setOpenP2(true); window.history.pushState({ type: "modal" }, ""); modalOpen.current = true; };
  const onOpenModalP3 = () => { setOpenP3(true); window.history.pushState({ type: "modal" }, ""); modalOpen.current = true; };

  const onCloseModal = () => {
    setOpenP1(false);
    setOpenP2(false);
    setOpenP3(false);
    if (modalOpen.current) {
      modalOpen.current = false;
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = (e) => {
      // Only close if we've gone past the modal entry (not just back to it from the lightbox)
      if (modalOpen.current && e.state?.type !== "modal") {
        modalOpen.current = false;
        setOpenP1(false);
        setOpenP2(false);
        setOpenP3(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  const closeIcon = (
    <svg
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50px"
      height="50px"
      className="modal-close-icon"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
    </svg>
  );

  return (
    <section id="work">
      <div className={innerClasses}>
        <div className="container reveal-from-bottom mt-32">
          {/*this is a seperate .js file found in sections > partials*/}
          <SectionHeader data={sectionHeader} className="center-content mt-0" />

          <Link to="/flux">
            <div className="">
              {/* <div className=""> */}
              <Card className="caseStudyCard">
                <video className="caseStudyImg" autoPlay loop muted playsInline>
                  <source src={flux} type="video/mp4" />
                </video>
                <Card.ImgOverlay className="d-flex flex-column caseStudyImgGradient">
                  <Card.Title className="mt-auto caseStudyTitle has-text-shadow">
                    Shopify
                  </Card.Title>
                  <Card.Text className="caseStudyText has-text-shadow">
                    A large-scale kinetic installation for the office café.
                    {/* 40 metalic prisms
                    are rotated in coordinated patterns to create waves of
                    refracted light. */}
                  </Card.Text>
                  <Link to="/flux">
                    <Button
                      className="caseStudyButton"
                      variant="primary"
                      onClick={onOpenModalP2}
                    >
                      Learn more
                    </Button>
                  </Link>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Link>

          {/* <SectionHeader
            data={subHeader}
            className="center-content pb-0 mt-64"
          /> */}
          <div className="mt-64">
            <div className={tilesClasses}>
              <div className="reveal-from-bottom projectGrid">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP3}
                >
                  <Card className="bg-black projectCard">
                    <Card.Img
                      // className="tintMinor"
                      src={require("./../../assets/images/portfolio/brain/brainFeature.jpg")}
                    />
                    <Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title className="projectTitle">
                          Dassault
                        </Card.Title>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </button>
              </div>

              <div className="reveal-from-left projectGrid">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP2}
                >
                  <Card className="bg-black projectCard ">
                    <Card.Img
                      className="tintMajor"
                      src={require("./../../assets/images/portfolio/braking/kioskCroppedCover.jpg")}
                    />
                    <Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title className="projectTitle">KIA</Card.Title>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </button>
              </div>

              <div className="reveal-from-right projectGrid">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP1}
                >
                  <Card className="bg-black projectCard">
                    <Card.Img
                      className="tintMinor"
                      src={require("./../../assets/images/portfolio/Snowflake/snowflakeNewCover.png")}
                    />
                    <Card.ImgOverlay className=" d-flex flex-column">
                      <Card.Body>
                        <Card.Title className="projectTitle">
                          BCE Place
                        </Card.Title>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </button>
              </div>

              <Modal
                open={openP1}
                onClose={onCloseModal}
                center
                closeIcon={closeIcon}
                classNames={{
                  modal: "projectModal",
                  overlay: "projectOverlay",
                  // modalAnimationIn: "customEnterModalAnimation",
                  // modalAnimationOut: "customLeaveModalAnimation",
                }}
                animationDuration={800}
              >
                <ProjectModal {...Project1ModalContent} />
              </Modal>
              <Modal
                open={openP2}
                onClose={onCloseModal}
                center
                closeIcon={closeIcon}
                classNames={{
                  modal: "projectModal",
                  overlay: "projectOverlay",
                  // modalAnimationIn: "customEnterModalAnimation",
                  //modalAnimationOut: "customLeaveModalAnimation",
                }}
                animationDuration={800}
              >
                <ProjectModal {...Project2ModalContent} />
              </Modal>
              <Modal
                open={openP3}
                onClose={onCloseModal}
                center
                closeIcon={closeIcon}
                classNames={{
                  modal: "projectModal",
                  overlay: "projectOverlay",
                  //modalAnimationIn: "customEnterModalAnimation",
                  //modalAnimationOut: "customLeaveModalAnimation",
                }}
                animationDuration={800}
              >
                <ProjectModal {...Project3ModalContent} />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
