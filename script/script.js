const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Toggle class active ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

// Hide navigation when clicking outside sidebar
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the sidebar
  if (
    !navbarNav.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
