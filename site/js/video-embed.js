(function () {
  "use strict";

  function getYouTubeId(url) {
    var match = url.match(/embed\/([^?&/]+)/);
    return match ? match[1] : null;
  }

  function withAutoplay(url) {
    return url + (url.indexOf("?") !== -1 ? "&" : "?") + "autoplay=1";
  }

  document.querySelectorAll(".video-facade").forEach(function (button) {
    var embedSrc = button.getAttribute("data-embed-src");
    var posterSrc = button.getAttribute("data-poster");
    var videoId = getYouTubeId(embedSrc);
    var thumb = button.querySelector(".video-facade-thumb");

    if (thumb) {
      var initialSrc = posterSrc || (videoId ? "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg" : "");
      thumb.src = initialSrc;
      thumb.addEventListener("error", function () {
        if (!posterSrc && videoId) {
          thumb.src = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
        }
      });
    }

    // Non-YouTube embeds have no click-to-play facade in the original app -
    // they're just embedded directly. Preserve that.
    if (!videoId) {
      mountIframe(button, embedSrc);
      return;
    }

    button.addEventListener("click", function () {
      mountIframe(button, withAutoplay(embedSrc));
    });
  });

  function mountIframe(button, src) {
    var wrapper = button.parentElement;
    var iframe = document.createElement("iframe");
    iframe.width = "528";
    iframe.height = "396";
    iframe.src = src;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = "Embedded video";
    wrapper.innerHTML = "";
    wrapper.appendChild(iframe);
  }
})();
