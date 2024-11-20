import React, { useState, useCallback } from "react";
import { SectionTilesProps } from "../../utils/SectionProps";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const OtherProjects = ({
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
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const gallery = {
    images: [
      {
        src: require("./../../assets/images/portfolio/more/more12.jpg"),
        width: 2,
        height: 1,
        title: "Tactile Robot for Ontario Science Center",
      },
      {
        src: require("./../../assets/images/portfolio/more/more11.jpg"),
        width: 2,
        height: 1,
        title: "VR Controller for Intel",
      },
      {
        src: require("./../../assets/images/portfolio/more/more9.png"),
        width: 2,
        height: 1,
        title: "Charging Demo for Hyundai",
      },
      {
        src: require("./../../assets/images/portfolio/more/more3.jpg"),
        width: 1.1,
        height: 1,
        // className: "tintMinor",
        title: "Reactive LED lighting for Bristol Myers Squibb",
      },
      {
        src: require("./../../assets/images/portfolio/more/more4.jpg"),
        width: 2,
        height: 1,
        // className: "tintMinor",
        title: "App for LED Graffiti Wall for Telus",
      },
      {
        src: require("./../../assets/images/portfolio/more/more5.jpg"),
        width: 1.1,
        height: 1,
        // className: "tintMinor",
        title: "VR Position Tracker for OSRAM",
      },
      // {
      //   src: require("./../../assets/images/portfolio/more/more6.jpg"),
      //   width: 1,
      //   height: 1,
      //   className: "tintMinor",
      //   title: "NFC Scanners for Intel",
      // },
      {
        src: require("./../../assets/images/portfolio/more/more8.png"),
        width: 2,
        height: 1,
        title: "LED Generative Art Wall",
      },
    ],
  };

  return (
    <section id="work">
      <div className="container-sm reveal-from-bottom mt-16">
        {/* <h3 className="ta-c">More</h3> */}
        <div className=" container-sm cs-gridWrapper reveal-from-bottom">
          <Gallery
            photos={gallery.images}
            onClick={openLightbox}
            targetRowHeight={160}
            margin={6}
          />
        </div>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                showNavigationOnTouchDevice={true}
                views={gallery.images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className="cs-carouselWrapper container-xs">
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={gallery.images.map((x) => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

OtherProjects.propTypes = propTypes;
OtherProjects.defaultProps = defaultProps;

export default OtherProjects;
