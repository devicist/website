(function () {
  "use strict";

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function scrollStep(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) {
    var runtime = currentTime - startTime;
    var progress = Math.min(runtime / duration, 1);
    var ease = easeInOutQuad(progress);

    window.scroll(0, startScrollOffset + scrollEndElemTop * ease);

    if (runtime < duration) {
      window.requestAnimationFrame(function (timestamp) {
        scrollStep(startTime, timestamp || Date.now(), duration, scrollEndElemTop, startScrollOffset);
      });
    }
  }

  function smoothScrollTo(target, duration) {
    window.requestAnimationFrame(function (timestamp) {
      var start = timestamp || Date.now();
      var startScrollOffset = window.pageYOffset;
      var scrollEndElemTop = target.getBoundingClientRect().top;
      scrollStep(start, start, duration, scrollEndElemTop, startScrollOffset);
    });
  }

  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var url;
      try {
        url = new URL(link.href, window.location.href);
      } catch (err) {
        return;
      }
      if (url.pathname !== window.location.pathname || !url.hash) return;

      var target = document.getElementById(url.hash.slice(1));
      if (!target) return;

      e.preventDefault();
      var duration = parseInt(link.getAttribute("data-scroll-duration"), 10) || 1000;
      smoothScrollTo(target, duration);
    });
  });
})();
