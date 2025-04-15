import _ from "lodash";
import "./styles/index.css";

const apply = (e) => {
  const map = document.querySelector(".offices__map").contentWindow.document;
  map
    .querySelectorAll(".map-all")
    .forEach((el) => el.classList.remove("map-show"));

  map
    .querySelectorAll("." + e.target.getAttribute("data"))
    .forEach((el) => el.classList.add("map-show"));

  document
    .querySelector(".offices__item_active")
    .classList.remove("offices__item_active");
  e.target.classList.add("offices__item_active");
};

const toggleOfficeMenu = (e) => {
  document
    .querySelector(".offices__dropdown-menu")
    .classList.toggle("offices__dropdown-menu_active");

  document
    .querySelector(".offices__icon")
    .classList.toggle("offices__icon_open");
};

const toggleOfficeDropdownMenu = (e) => {
  e.target
    .closest(".offices__dropdown-list")
    .classList.toggle("offices__dropdown-list_opened");
};

document.querySelector(".offices__list").addEventListener("click", apply);

const officeMenu = document.querySelector(".offices__button");
officeMenu.addEventListener("click", toggleOfficeMenu);

const officeDropdownList = document.querySelectorAll(".offices__dropdown-list");
officeDropdownList.forEach((el) =>
  el.addEventListener("click", toggleOfficeDropdownMenu)
);

// carousel
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel__list");
  let items = carousel.querySelectorAll(".carousel__item");
  let dotsContainer = document.querySelector(".carousel__dots");

  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("carousel__dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".carousel__dot");

  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  document
    .querySelector(".carousel__btn-prev")
    .addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index - 1 + items.length) % items.length);
    });

  document
    .querySelector(".carousel__btn-next")
    .addEventListener("click", () => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});
