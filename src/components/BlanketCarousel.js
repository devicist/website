import React, { useState } from "react";

const carouselPics = require.context(
  "../assets/images/portfolio/blanket/carousel",
  false,
  /\.(jpe?g|png)$/i,
);

const PHOTOS = carouselPics
  .keys()
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => carouselPics(key));

const BlanketCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    setActiveIndex((index + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div className="blanket-page-carousel-wrap">
      <div className="blanket-page-carousel">
        {PHOTOS.map((src, index) => (
          <div
            className={
              index === activeIndex
                ? "blanket-page-carousel-slide blanket-page-carousel-slide-active"
                : "blanket-page-carousel-slide"
            }
            key={src}
          >
            <img src={src} alt={`The Blanket Project, documentation photo ${index + 1}`} />
          </div>
        ))}

        <button
          className="blanket-page-carousel-prev"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous photo"
        />
        <button
          className="blanket-page-carousel-next"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next photo"
        />

        <div className="blanket-page-carousel-dots">
          {PHOTOS.map((src, index) => (
            <button
              key={src}
              className={
                index === activeIndex
                  ? "blanket-page-carousel-dot blanket-page-carousel-dot-active"
                  : "blanket-page-carousel-dot"
              }
              onClick={() => goTo(index)}
              aria-label={`Show photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="blanket-page-carousel-caption">The Blanket Project, 2002–2007</p>
    </div>
  );
};

export default BlanketCarousel;
