(function () {
  "use strict";

  var modals = document.querySelectorAll(".project-modal");
  if (!modals.length) return;

  // Move modals to be direct children of <body>. They're authored inline
  // next to their trigger tiles (which sit inside reveal-from-* ancestors),
  // and `will-change: transform` on those ancestors would otherwise make
  // them the containing block for this modal's `position: fixed`, breaking
  // the full-viewport overlay. react-responsive-modal avoided this in the
  // old app by portalling to document.body - do the same here.
  modals.forEach(function (modal) {
    document.body.appendChild(modal);
  });

  var modalOpenViaHistory = false;
  var activeModal = null;
  var originalScrollY = 0;

  function openModal(modal) {
    if (activeModal) closeModal(activeModal, { skipHistory: true });
    activeModal = modal;
    originalScrollY = window.scrollY;
    modal.classList.add("is-active");
    document.body.classList.add("modal-is-active");
    // Push the modal's id as the URL hash too, so the address bar always
    // reflects a copyable link to whatever's open (see the hash-based
    // auto-open at the bottom of this file for the other half of this).
    window.history.pushState({ type: "modal", id: modal.id }, "", "#" + modal.id);
    modalOpenViaHistory = true;

    var content = modal.querySelector(".project-modal-content");
    if (content) content.focus();

    // The modal's photo gallery was laid out (or bailed out) while hidden
    // at zero width - now that it's visible, lay it out for real.
    if (window.relayoutGalleries) window.relayoutGalleries(modal);

    requestAnimationFrame(function () {
      window.scrollTo(0, 0);
      requestAnimationFrame(function () {
        window.scrollTo(0, 0);
      });
    });
  }

  function closeModal(modal, opts) {
    opts = opts || {};
    modal.classList.remove("is-active");
    document.body.classList.remove("modal-is-active");
    if (activeModal === modal) activeModal = null;
    window.scrollTo(0, originalScrollY);
    if (modalOpenViaHistory && !opts.skipHistory) {
      modalOpenViaHistory = false;
      window.history.back();
    }
  }

  document.querySelectorAll("[data-modal-target]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modal = document.getElementById(trigger.getAttribute("data-modal-target"));
      if (modal) openModal(modal);
    });
  });

  modals.forEach(function (modal) {
    var container = modal.querySelector(".project-modal-container");
    var closeBtn = modal.querySelector(".project-modal-close");
    // .project-modal-container covers the full modal area (it's what makes
    // .project-modal-inner appear vertically centered), so it sits in front
    // of .project-modal-overlay and is what a "click outside the card"
    // actually lands on. Only close when the click target is the container
    // itself - not the card or anything inside it - so this doesn't fire
    // for ordinary clicks on the modal's content.
    if (container) {
      container.addEventListener("click", function (e) {
        if (e.target === container) closeModal(modal);
      });
    }
    if (closeBtn) closeBtn.addEventListener("click", function () { closeModal(modal); });
  });

  document.addEventListener("keydown", function (e) {
    if (activeModal && e.key === "Escape") closeModal(activeModal);
  });

  window.addEventListener("popstate", function (e) {
    if (modalOpenViaHistory && activeModal && (!e.state || e.state.type !== "modal")) {
      modalOpenViaHistory = false;
      closeModal(activeModal, { skipHistory: true });
    }
  });

  // Support linking directly to a modal, e.g. https://devicist.com/#frost.
  // Rewrite the page's own entry to the plain URL first, so a later back
  // navigation closes the modal instead of leaving the site entirely -
  // matching the two-entry structure (page, then modal) a normal click
  // to open one creates.
  if (location.hash) {
    var initialModal = document.getElementById(location.hash.slice(1));
    if (initialModal && initialModal.classList.contains("project-modal")) {
      window.history.replaceState(null, "", location.pathname + location.search);
      openModal(initialModal);
    }
  }
})();
