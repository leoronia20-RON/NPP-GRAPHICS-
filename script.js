// script.js — Mobile nav, portfolio filter, smooth scroll, form validation
(function () {
  "use strict";

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open);
    });

    // Close nav when clicking outside (mobile)
    document.addEventListener("click", (e) => {
      if (
        !mainNav.contains(e.target) &&
        !navToggle.contains(e.target) &&
        mainNav.classList.contains("open")
      ) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // close mobile nav after navigation
          if (mainNav && mainNav.classList.contains("open")) {
            mainNav.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
      }
    });
  });

  // Portfolio filtering (simple client-side)
  const filters = document.querySelectorAll(".portfolio-filters .filter");
  const items = document.querySelectorAll(".portfolio-item");
  if (filters.length && items.length) {
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        filters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.textContent.trim().toLowerCase();
        if (cat === "all") {
          items.forEach((i) => (i.style.display = "block"));
        } else {
          items.forEach((i) => {
            const c = (i.querySelector(".overlay > p") || {}).textContent || "";
            if (c.toLowerCase().includes(cat)) i.style.display = "block";
            else i.style.display = "none";
          });
        }
      });
    });
  }

  // Basic form validation feedback for quote and contact forms
  function attachFormValidation(selector) {
    const form = document.querySelector(selector);
    if (!form) return;
    form.addEventListener("submit", (e) => {
      const required = form.querySelectorAll("[required]");
      let valid = true;
      required.forEach((f) => {
        if (!f.value || f.value.trim() === "") {
          valid = false;
          f.classList.add("invalid");
        } else f.classList.remove("invalid");
      });
      if (!valid) {
        e.preventDefault();
        alert("Please fill in the required fields before submitting.");
      } else {
        // simple success UI
        e.preventDefault();
        alert("Thank you. Your request has been received (demo).");
        form.reset();
      }
    });
  }
  attachFormValidation(".quote-form");
  attachFormValidation(".contact-form");

  // Highlight current page link in header navigation
  (function highlightCurrentNav() {
    const links = document.querySelectorAll(".main-nav a");
    if (!links.length) return;
    const path = window.location.pathname.split("/").pop() || "index.html";
    links.forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;
      if (href === path || (href === "index.html" && path === "")) {
        a.classList.add("current");
      } else {
        a.classList.remove("current");
      }
    });
  })();
})();
