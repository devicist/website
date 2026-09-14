(function () {
  "use strict";

  var MARGIN = 4;

  // ---- Justified row layout -------------------------------------------
  function layoutGallery(gallery) {
    var targetHeight = parseInt(gallery.getAttribute("data-target-row-height"), 10) || 100;
    var items = Array.prototype.slice.call(gallery.querySelectorAll(".gallery-item"));
    var containerWidth = gallery.clientWidth;
    if (!containerWidth || !items.length) return;

    var row = [];
    var rowAspectSum = 0;

    function flushRow(isLast) {
      if (!row.length) return;
      var totalMargin = MARGIN * (row.length - 1);
      var naturalRowWidth = rowAspectSum * targetHeight;
      var fits = naturalRowWidth + totalMargin >= containerWidth;
      var rowHeight = fits
        ? (containerWidth - totalMargin) / rowAspectSum
        : targetHeight;

      row.forEach(function (entry, i) {
        var w = entry.aspect * rowHeight;
        entry.el.style.width = w + "px";
        entry.el.style.height = rowHeight + "px";
        entry.el.style.marginRight = i < row.length - 1 ? MARGIN + "px" : "0";
      });
      row = [];
      rowAspectSum = 0;
    }

    items.forEach(function (el) {
      var img = el.querySelector("img");
      var aspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1;
      el.style.marginBottom = MARGIN + "px";
      row.push({ el: el, aspect: aspect });
      rowAspectSum += aspect;

      var totalMargin = MARGIN * (row.length - 1);
      if (rowAspectSum * targetHeight + totalMargin >= containerWidth) {
        flushRow(false);
      }
    });
    flushRow(true);
  }

  function layoutAllGalleries() {
    document.querySelectorAll(".gallery").forEach(layoutGallery);
  }

  function whenImagesReady(gallery, cb) {
    var imgs = gallery.querySelectorAll("img");
    var remaining = imgs.length;
    if (!remaining) return cb();
    imgs.forEach(function (img) {
      if (img.complete) {
        if (--remaining === 0) cb();
      } else {
        img.addEventListener("load", function () {
          if (--remaining === 0) cb();
        });
        img.addEventListener("error", function () {
          if (--remaining === 0) cb();
        });
      }
    });
  }

  document.querySelectorAll(".gallery").forEach(function (gallery) {
    whenImagesReady(gallery, function () {
      layoutGallery(gallery);
    });
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layoutAllGalleries, 100);
  });

  // Galleries inside a project modal are `display: none` (so width/height
  // are 0) until the modal opens, so the image-load-triggered layout above
  // runs against a zero-width container and bails out - and never re-runs
  // once the modal becomes visible, since that's not a window resize.
  // modals.js calls this once it makes a modal visible.
  window.relayoutGalleries = function (root) {
    (root || document).querySelectorAll(".gallery").forEach(layoutGallery);
  };

  // ---- Lightbox ----------------------------------------------------------
  var lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML =
    '<button class="gallery-lightbox-close" aria-label="Close">&times;</button>' +
    '<button class="gallery-lightbox-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure class="gallery-lightbox-figure">' +
    '<img class="gallery-lightbox-image" alt="" />' +
    '<figcaption class="gallery-lightbox-caption"></figcaption>' +
    "</figure>" +
    '<button class="gallery-lightbox-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(lightbox);

  var closeBtn = lightbox.querySelector(".gallery-lightbox-close");
  var prevBtn = lightbox.querySelector(".gallery-lightbox-prev");
  var nextBtn = lightbox.querySelector(".gallery-lightbox-next");
  var imageEl = lightbox.querySelector(".gallery-lightbox-image");
  var captionEl = lightbox.querySelector(".gallery-lightbox-caption");

  var currentItems = [];
  var currentIndex = 0;
  var historyIntegrated = false;
  var lightboxOpenViaHistory = false;

  function show(index) {
    currentIndex = (index + currentItems.length) % currentItems.length;
    var item = currentItems[currentIndex];
    imageEl.src = item.getAttribute("href");
    var caption = item.getAttribute("data-caption") || "";
    captionEl.textContent = caption;
    captionEl.hidden = !caption;
  }

  function openLightbox(gallery, index) {
    currentItems = Array.prototype.slice.call(gallery.querySelectorAll(".gallery-item"));
    historyIntegrated = gallery.getAttribute("data-lightbox-history") === "true";
    show(index);
    lightbox.classList.add("is-active");
    document.body.classList.add("lightbox-is-active");
    if (historyIntegrated) {
      window.history.pushState({ type: "lightbox" }, "");
      lightboxOpenViaHistory = true;
    }
  }

  function closeLightbox() {
    lightbox.classList.remove("is-active");
    document.body.classList.remove("lightbox-is-active");
    if (historyIntegrated && lightboxOpenViaHistory) {
      lightboxOpenViaHistory = false;
      window.history.back();
    }
  }

  document.querySelectorAll(".gallery").forEach(function (gallery) {
    gallery.querySelectorAll(".gallery-item").forEach(function (item, index) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        openLightbox(gallery, index);
      });
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () {
    show(currentIndex - 1);
  });
  nextBtn.addEventListener("click", function () {
    show(currentIndex + 1);
  });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
  window.addEventListener("popstate", function (e) {
    if (lightboxOpenViaHistory && (!e.state || e.state.type !== "lightbox")) {
      lightboxOpenViaHistory = false;
      lightbox.classList.remove("is-active");
      document.body.classList.remove("lightbox-is-active");
    }
  });
})();
