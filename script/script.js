const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

// Toggle class active ketika search form diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// klik di luar sidebar untuk menghilangkan navbar
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the sidebar
  if (
    !navbarNav.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active ketika search button diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// klik di luar sidebar untuk menghilangkan search form
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the sidebar
  if (
    !searchButton.contains(event.target) &&
    !searchForm.contains(event.target)
  ) {
    searchForm.classList.remove("active");
  }
});
