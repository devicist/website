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
    window.history.pushState({ type: "modal" }, "");
    modalOpenViaHistory = true;

    var content = modal.querySelector(".project-modal-content");
    if (content) content.focus();

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
    var overlay = modal.querySelector(".project-modal-overlay");
    var closeBtn = modal.querySelector(".project-modal-close");
    if (overlay) overlay.addEventListener("click", function () { closeModal(modal); });
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
})();
