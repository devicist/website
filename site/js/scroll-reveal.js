(function () {
  "use strict";

  // The reveal CSS (core/base/_scroll-reveal.scss) only applies its
  // opacity/transform transition once body has both .has-animations (set in
  // the HTML) and .is-loaded (set here) - this avoids a flash of invisible
  // content if this script fails to load at all.
  document.body.classList.add("is-loaded");

  if (!("IntersectionObserver" in window)) return;

  var elements = document.querySelectorAll('[class*="reveal-"]');
  if (!elements.length) return;

  function reveal(el) {
    if (el.classList.contains("is-revealed")) return;
    var delay = parseInt(el.getAttribute("data-reveal-delay"), 10);
    if (delay) {
      setTimeout(function () {
        el.classList.add("is-revealed");
      }, delay);
    } else {
      el.classList.add("is-revealed");
    }
  }

  elements.forEach(function (el) {
    var offset = el.getAttribute("data-reveal-offset") || "200";
    var containerSelector = el.getAttribute("data-reveal-container");
    var target = containerSelector ? el.closest(containerSelector) || el : el;

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            reveal(el);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -" + offset + "px 0px", threshold: 0 }
    );

    observer.observe(target);
  });
})();
