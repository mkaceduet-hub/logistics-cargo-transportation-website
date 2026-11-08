const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const trackingForm = document.getElementById("tracking-form");
const trackingResult = document.getElementById("tracking-result");

if (trackingForm && trackingResult) {
  trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reference = document.getElementById("tracking-number").value.trim();
    if (!reference) return;
    trackingResult.textContent = `Demo lookup for ${reference}: shipment reference received. Connect a carrier API to display live tracking events.`;
  });
}

const quoteForm = document.getElementById("quote-form");
const formStatus = document.getElementById("form-status");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    formStatus.textContent = "Thank you! Your demo request has been captured in this page. No email has been sent.";
    quoteForm.reset();
  });
}