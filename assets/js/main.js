'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);

/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");
const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

/**
 * CONTACT POPUP OVERLAY
 */

const contactBtn = document.getElementById("contactBtn");
const popupOverlay = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup");

if (contactBtn && popupOverlay && closePopupBtn) {
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault(); // prevent link behavior
    popupOverlay.style.display = "flex"; // show the popup
  });

  closePopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "none"; // hide the popup
  });

  // Optional: close when clicking outside the card
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
}
