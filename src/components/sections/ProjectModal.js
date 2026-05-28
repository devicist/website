import React, { useState, useCallback, useEffect, useRef } from "react";

import SectionHeader from "./partials/SectionHeader";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import VideoEmbed from "../elements/VideoEmbed";

const ProjectModal = (ProjectModalContent) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const lightboxOpen = useRef(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    window.history.pushState({ type: "lightbox" }, "");
    lightboxOpen.current = true;
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    if (lightboxOpen.current) {
      lightboxOpen.current = false;
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (lightboxOpen.current && e.state?.type !== "lightbox") {
        lightboxOpen.current = false;
        setViewerIsOpen(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const sectionHeader = {
    title: ProjectModalContent.title,
    paragraph: ProjectModalContent.body,
  };

  return (
    <section>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content mt-32" />
        <div className="projectVideo">
          <VideoEmbed embedId={ProjectModalContent.videoUrl} />
        </div>
        <div className="gridWrapper">
          <Gallery
            photos={ProjectModalContent.images}
            onClick={openLightbox}
            targetRowHeight={100}
          />
        </div>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                showNavigationOnTouchDevice={true}
                views={ProjectModalContent.images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className="carouselWrapper">
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={ProjectModalContent.images.map((x) => ({
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

export default ProjectModal;
