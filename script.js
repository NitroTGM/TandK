// DARK / LIGHT MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});