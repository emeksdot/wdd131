const hamburger = document.querySelector("#menu");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  ul.classList.toggle("hide");
  ul.classList.toggle("open");
});

const currentYear = document.querySelector("#currentyear");
const year = new Date().getFullYear();

const lastModfiedDate = document.querySelector("#lastModified");
currentYear.innerHTML = year;

lastModfiedDate.innerHTML = new Date(document.lastModified);
