const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const searchForm = document.getElementById("searchForm");
const modelSearch = document.getElementById("modelSearch");
const searchFeedback = document.getElementById("searchFeedback");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const model = modelSearch.value.trim();
  if (!model) {
    searchFeedback.textContent = "Enter your printer model to continue.";
    modelSearch.focus();
    return;
  }
  searchFeedback.textContent = `Search term entered: “${model}”. Connect this form to your model lookup or support workflow to return matching results.`;
});

modelSearch.addEventListener("input", () => {
  if (!modelSearch.value.trim()) searchFeedback.textContent = "";
});

document.getElementById("year").textContent = new Date().getFullYear();
