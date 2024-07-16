const dateModified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = dateModified;

const visited = document.querySelector(".numberOfTimes");

const select = document.querySelector("#products");

const products = [
  {
    id: "fc - 1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },

  {
    id: "fc - 2050",
    name: "power laces",
    averagerating: 4.7,
  },

  {
    id: "fs - 1987",
    name: "time circuits",
    averagerating: 3.5,
  },

  {
    id: "ac - 2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },

  {
    id: "jj - 1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

console.log(products);
for (let x of products) {
  let option = document.createElement("option");
  option.innerHTML = x.name.toUpperCase();
  option.classList.add("option-style");
  select.appendChild(option);
  console.log(x.name);
}
