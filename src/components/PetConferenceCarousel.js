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
    <div className="pet-page-conference-wrap">
      <div className="pet-page-conference">
        {PHOTOS.map((src, index) => (
          <div
            className={
              index === activeIndex
                ? "pet-page-conference-slide pet-page-conference-slide-active"
                : "pet-page-conference-slide"
            }
            key={src}
          >
            <img src={src} alt={`PET at a robotics conference ${index + 1}`} />
          </div>
        ))}

        <button
          className="pet-page-conference-prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous photo"
        />
        <button
          className="pet-page-conference-next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next photo"
        />

        <div className="pet-page-conference-dots">
          {PHOTOS.map((src, index) => (
            <button
              key={src}
              className={
                index === activeIndex
                  ? "pet-page-conference-dot pet-page-conference-dot-active"
                  : "pet-page-conference-dot"
              }
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="pet-page-conference-caption">PET at ICRA</p>
    </div>
  );
};

export default PetConferenceCarousel;
