import React, { useState } from "react";

const conferencePics = require.context(
  "../assets/images/portfolio/pet/conference-pics",
  false,
  /\.(jpe?g|png)$/
);

const PHOTOS = conferencePics
  .keys()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => conferencePics(key));

const PetConferenceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    setActiveIndex((index + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div className="pet-modal-conference-wrap">
      <div className="pet-modal-conference">
        {PHOTOS.map((src, index) => (
          <div
            className={
              index === activeIndex
                ? "pet-modal-conference-slide pet-modal-conference-slide-active"
                : "pet-modal-conference-slide"
            }
            key={src}
          >
            <img src={src} alt={`PET at a robotics conference ${index + 1}`} />
          </div>
        ))}

        <button
          className="pet-modal-conference-prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous photo"
        />
        <button
          className="pet-modal-conference-next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next photo"
        />

        <div className="pet-modal-conference-dots">
          {PHOTOS.map((src, index) => (
            <button
              key={src}
              className={
                index === activeIndex
                  ? "pet-modal-conference-dot pet-modal-conference-dot-active"
                  : "pet-modal-conference-dot"
              }
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="pet-modal-conference-caption">PET at ICRA</p>
    </div>
  );
};

export default PetConferenceCarousel;
