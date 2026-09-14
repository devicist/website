(function () {
  "use strict";

  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-carousel-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-carousel-dot]"));
    var prevBtn = root.querySelector("[data-carousel-prev]");
    var nextBtn = root.querySelector("[data-carousel-next]");
    var activeClass = root.getAttribute("data-active-class") || "is-active";
    var dotActiveClass = root.getAttribute("data-dot-active-class") || activeClass;
    if (!slides.length) return;

    var activeIndex = 0;
    slides.forEach(function (s, i) {
      if (s.classList.contains(activeClass)) activeIndex = i;
    });

    function goTo(index) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        s.classList.toggle(activeClass, i === activeIndex);
      });
      dots.forEach(function (d, i) {
        d.classList.toggle(dotActiveClass, i === activeIndex);
      });
      root.dispatchEvent(new CustomEvent("carousel:change", { detail: { index: activeIndex } }));
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(activeIndex - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(activeIndex + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); });
    });
  });

  // Extension for video-slide carousels (PetShorts): play the active slide's
  // video and pause the rest, and reveal native controls on hover.
  document.querySelectorAll("[data-carousel-videos]").forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-carousel-slide]"));

    function syncVideos(activeIndex) {
      slides.forEach(function (slide, i) {
        var video = slide.querySelector("video");
        if (!video) return;
        if (i === activeIndex) {
          video.currentTime = 0;
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }

    root.addEventListener("carousel:change", function (e) {
      syncVideos(e.detail.index);
    });

    slides.forEach(function (slide) {
      var video = slide.querySelector("video");
      if (!video) return;
      video.muted = true;
      slide.addEventListener("mouseenter", function () { video.controls = true; });
      slide.addEventListener("mouseleave", function () { video.controls = false; });
    });

    syncVideos(0);
  });
})();
