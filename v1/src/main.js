// ---- Mobile nav ----
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    navLinks.classList.toggle("is-open", !open);
  });

  navLinks.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.matches("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    }
  });
}


// ---- Form submission stub (no backend yet) ----
document.querySelectorAll("form[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.info("[lead-form] submission captured (no backend):", data);

    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Recibido. Un especialista te contactará en 24 horas.";
      status.dataset.state = "success";
    }
    form.reset();
  });
});

document.querySelectorAll("form[data-newsletter-form]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Listo. Te avisaremos por temporada.";
      status.dataset.state = "success";
    }
    form.reset();
  });
});
