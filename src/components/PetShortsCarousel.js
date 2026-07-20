import React, { useState, useRef, useEffect } from "react";
import short1 from "../assets/videos/PET - prototype 1 - 2025.mp4";
import short2 from "../assets/videos/PET_ICRA - prototype 2 - 2026.mp4";
import short3 from "../assets/videos/PET_ICSR - 2026.mp4";

const SHORTS = [short1, short2, short3];

const PetShortsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const goTo = (index) => {
    setActiveIndex((index + SHORTS.length) % SHORTS.length);
  };

  return (
    <div className="pet-modal-shorts">
      {SHORTS.map((src, index) => (
        <div
          className={
            index === activeIndex
              ? "pet-modal-shorts-slide pet-modal-shorts-slide-active"
              : "pet-modal-shorts-slide"
          }
          key={src}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            controls={hoveredIndex === index}
            style={index === 2 ? { objectPosition: "left" } : undefined}
          />
        </div>
      ))}

      <button
        className="pet-modal-shorts-prev"
        onClick={() => goTo(activeIndex - 1)}
        aria-label="Previous short"
      />
      <button
        className="pet-modal-shorts-next"
        onClick={() => goTo(activeIndex + 1)}
        aria-label="Next short"
      />

      <div className="pet-modal-shorts-dots">
        {SHORTS.map((src, index) => (
          <button
            key={src}
            className={
              index === activeIndex
                ? "pet-modal-shorts-dot pet-modal-shorts-dot-active"
                : "pet-modal-shorts-dot"
            }
            onClick={() => goTo(index)}
            aria-label={`Show short ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PetShortsCarousel;
