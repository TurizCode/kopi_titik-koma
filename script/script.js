// NOTE: Maaf bahasanya campur-campur :)
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemdetailButton = document.querySelector(".item-detail-button");
const itemdetailButtons = document.querySelectorAll(".item-detail-button");
const closeItemDetailButton = document.querySelector(".close-icon");
const modalContainer = document.querySelector(".modal-container");
const loader = document.getElementById("preloader");

// PRELOADER
window.addEventListener("load", () => {
  setTimeout(() => (loader.style.display = "none"), 2500);
});

// HAMBURGER MENU
// Toggle class active ketika search button diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// klik di luar search bar untuk menghilangkan search form
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the search bar
  if (
    !searchButton.contains(event.target) &&
    !searchForm.contains(event.target)
  ) {
    searchForm.classList.remove("active");
  }
});

// SEARCH FORM
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

// SHOPPING CART
// Toggle class active ketika shopping cart button diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};
// klik di luar shopping cart button untuk menghilangkan shopping cart section
document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the shoppingcart
  if (
    !shoppingCartButton.contains(event.target) &&
    !shoppingCart.contains(event.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// MODAL BOX
// change the display of the modal box/ item detail model from none to flex
itemdetailButton.onclick = (e) => {
  modalContainer.classList.remove("out");
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};
// change the display of the modal box/ item detail model from flex to none
closeItemDetailButton.onclick = (e) => {
  modalContainer.classList.add("out");
  setTimeout(() => {
    itemDetailModal.style.display = "none";
  }, 500);
  e.preventDefault();
};
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    modalContainer.classList.add("out");
    setTimeout(() => {
      itemDetailModal.style.display = "none";
    }, 500);
  }
};

itemdetailButtons.forEach((button) => {
  button.onclick = (e) => {
    modalContainer.classList.remove("out");
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// TODO: Add a active class on the shown modal container with a unique id so it can provide a syncronized details based on the product id

// Add an active class to the shown modal container with a unique id (perhaps you can put the unique id on each of the eye icon)
// itemDetailModal.classList.add("active");
// itemDetailModal.id = "uniqueId";

// Provide synchronized details based on the product id
// function syncDetails(productId) {
//   Your code here to fetch and display details based on the productId
// }
