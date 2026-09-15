(function () {
  "use strict";

  var MARGIN = 4;

  // ---- Justified row layout -------------------------------------------
  function layoutGallery(gallery) {
    // .gallery--grid (the project modals) is sized by CSS - a fixed
    // N-column grid of square tiles - instead of this justified-row
    // layout, so there's nothing for this function to compute.
    if (gallery.classList.contains("gallery--grid")) return;
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
  // prev/figure/next are laid out as a row (see .gallery-lightbox-stage) so
  // the arrows always sit right next to the photo, whatever its aspect
  // ratio - not pinned to the screen edges, where they'd end up far from a
  // narrow photo (or crowd a wide one), making them feel like they "jump"
  // from photo to photo and inviting a miss-click onto the backdrop, which
  // closes the lightbox.
  var lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML =
    '<button class="gallery-lightbox-close" aria-label="Close">&times;</button>' +
    '<div class="gallery-lightbox-stage">' +
    '<button class="gallery-lightbox-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure class="gallery-lightbox-figure">' +
    '<img class="gallery-lightbox-image" alt="" />' +
    '<figcaption class="gallery-lightbox-caption"></figcaption>' +
    "</figure>" +
    '<button class="gallery-lightbox-next" aria-label="Next photo">&#8250;</button>' +
    "</div>";
  document.body.appendChild(lightbox);

  var closeBtn = lightbox.querySelector(".gallery-lightbox-close");
  var prevBtn = lightbox.querySelector(".gallery-lightbox-prev");
  var nextBtn = lightbox.querySelector(".gallery-lightbox-next");
  var imageEl = lightbox.querySelector(".gallery-lightbox-image");
  var captionEl = lightbox.querySelector(".gallery-lightbox-caption");

  var currentItems = [];
  var currentIndex = 0;

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
    show(index);
    lightbox.classList.add("is-active");
    document.body.classList.add("lightbox-is-active");
  }

  // The lightbox deliberately does NOT push its own history entry (it did
  // at first, so the physical/gesture back button would close just the
  // photo viewer) - nesting a second pushState on top of the project
  // modal's own made "back" behavior fragile: any stray history event
  // (a trackpad swipe grazing the nav arrows, etc.) could pop the photo
  // viewer's entry and drop back to the modal mid-browse. Escape, the X,
  // and clicking the backdrop all still close it; the modal underneath
  // keeps sole ownership of the history entry for this whole interaction.
  function closeLightbox() {
    lightbox.classList.remove("is-active");
    document.body.classList.remove("lightbox-is-active");
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
  var stage = lightbox.querySelector(".gallery-lightbox-stage");
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === stage) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-active")) return;
    // The lightbox sits on top of a project modal, which has its own
    // Escape handler (modals.js) on document. Without stopping this event
    // here, one Escape press would close both layers at once instead of
    // just backing out of the photo viewer first.
    if (e.key === "Escape") {
      e.stopImmediatePropagation();
      closeLightbox();
    }
    if (e.key === "ArrowLeft") show(currentIndex - 1);
    if (e.key === "ArrowRight") show(currentIndex + 1);
  });
  // The lightbox owns no history entry of its own (see closeLightbox), but
  // if the physical/gesture back button pops the project modal's entry
  // while a photo is open, close the (now-orphaned) lightbox along with it.
  window.addEventListener("popstate", closeLightbox);
})();
