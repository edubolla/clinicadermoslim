(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll("[data-accordion]").forEach(function (accordion) {
    accordion.querySelectorAll(".acc-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var item = trigger.closest(".acc-item");
        if (!item) return;
        var willOpen = !item.classList.contains("is-open");

        accordion.querySelectorAll(".acc-item").forEach(function (other) {
          other.classList.remove("is-open");
          var btn = other.querySelector(".acc-trigger");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });

        if (willOpen) {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
})();
