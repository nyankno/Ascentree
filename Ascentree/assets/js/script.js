'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);

// script for the logo scroller




const scrollerList = document.querySelector('.scroller-list');
const scrollerItems = document.querySelectorAll('.scroller-list li');
const itemWidth = scrollerItems[0].offsetWidth + 20; // Width of the logo + margin
let index = 0;

function scrollLogos() {
  index++;
  if (index >= scrollerItems.length) {
    index = 0;
  }

  scrollerList.style.transform = `translateX(-${index * itemWidth}px)`;

  setTimeout(() => {
    // Move the first element to the end of the list
    scrollerList.appendChild(scrollerList.firstElementChild);
    scrollerList.style.transition = 'none'; // Disable transition for reset
    scrollerList.style.transform = `translateX(-${(index - 1) * itemWidth}px)`; // Reset position

    setTimeout(() => {
      scrollerList.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      scrollerList.style.transform = `translateX(-${index * itemWidth}px)`; // Move to the next
    }, 50);
  }, 500);
}

setInterval(scrollLogos, 3000); // Adjust the speed of the scroller

