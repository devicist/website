(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  var isActive = false;

  function openMenu() {
    document.body.classList.add("off-nav-is-active");
    nav.classList.add("is-active");
    nav.style.maxHeight = nav.scrollHeight + "px";
    isActive = true;
  }

  function closeMenu() {
    document.body.classList.remove("off-nav-is-active");
    nav.classList.remove("is-active");
    nav.style.maxHeight = null;
    isActive = false;
  }

  toggle.addEventListener("click", function () {
    isActive ? closeMenu() : openMenu();
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (isActive && e.keyCode === 27) closeMenu();
  });

  document.addEventListener("click", function (e) {
    if (!isActive) return;
    if (nav.contains(e.target) || e.target === toggle || toggle.contains(e.target)) return;
    closeMenu();
  });
})();
