import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import deployIcon from "../../../assets/images/DeployIcon-white.svg";

const Deploy = (DeployContent) => {
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

  return (
    <section>
      <div className="container-sm design">
        <div className="" style={{}}>
          <h3 className="reveal-from-bottom">
            <img
              src={deployIcon}
              alt="design icon"
              width={40}
              className="mr-8"
            />
            Deploy
          </h3>
          <p className="reveal-from-bottom">{DeployContent.body}</p>
        </div>
      </div>

      <div className=" container-sm cs-gridWrapper reveal-from-bottom">
        <Gallery
          photos={DeployContent.images}
          onClick={openLightbox}
          targetRowHeight={300}
          limitNodeSearch={2}
        />
      </div>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              showNavigationOnTouchDevice={true}
              views={DeployContent.images.map((x) => ({
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
          views={DeployContent.images.map((x) => ({
            ...x,
            srcset: x.srcSet,
            caption: x.title,
          }))}
        />
      </div>
    </section>
  );
};

export default Deploy;
