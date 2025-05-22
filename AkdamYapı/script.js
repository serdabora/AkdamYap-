document.addEventListener("DOMContentLoaded", function () {
  // Dropdown menüyü kontrol et
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Menüye tıklandığında, menüyü göster/gizle
  dropdown.addEventListener("click", function (e) {
    e.stopPropagation(); // Menü dışında tıklanırsa kapanmasın
    dropdownContent.classList.toggle("show");
  });

  // Menü dışına tıklandığında, menüyü kapat
  document.addEventListener("click", function () {
    dropdownContent.classList.remove("show");
  });

  // Menü üzerinde hover olduğunda menü kapanmasın
  dropdown.addEventListener("mouseenter", function () {
    dropdownContent.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", function () {
    dropdownContent.classList.remove("show");
  });

  // Hamburger menü butonunu kontrol et
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("mobile-active");
    });
  }
});
