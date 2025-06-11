const input = document.getElementById("liveInput");
const preview = document.getElementById("previewText");
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

input.addEventListener("input", () => {
  preview.textContent = input.value || "Live preview shows here...";
});

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
});
