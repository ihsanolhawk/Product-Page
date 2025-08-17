// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-list");

  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
