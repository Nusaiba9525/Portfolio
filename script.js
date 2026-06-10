function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

/* AUTO CLOSE MENU ON CLICK (UX upgrade) */
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("show");
  });
});

/* THEME TOGGLE */
function toggleTheme() {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

/* LOAD THEME */
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  typeEffect(); // start typing safely
});

/* ================= TYPING EFFECT ================= */
const text = "Hi, I'm Nusaiba E";
let i = 0;

function typeEffect() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

/* ================= SCROLL REVEAL (OPTIMIZED) ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

function handleSubmit(event) {
  event.preventDefault();

  const btn = event.target.querySelector("button");
  btn.innerText = "Sending...";

  setTimeout(() => {
    btn.innerText = "Sent ✓";

    setTimeout(() => {
      btn.innerText = "Send Message →";
      event.target.reset();
    }, 1500);

  }, 1200);
}