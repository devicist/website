(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;
  var resultEl = document.getElementById("contact-form-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(form).entries());

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        if (resultEl) resultEl.textContent = json.message;
        if (json.success) form.reset();
      })
      .catch(function () {
        if (resultEl) resultEl.textContent = "Something went wrong. Please try again.";
      });
  });
})();
