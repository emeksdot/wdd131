const hamburger = document.querySelector("#menu");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  ul.classList.toggle("hide");
  ul.classList.toggle("open");
});

const linksURL = "https://emeksdot.github.io/wdd131/project/data/products.json";

const openshop = document.querySelector(".products");
const closeshop = document.querySelector(".close");
const list = document.querySelector(".productsList");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const qty = document.querySelector(".qty");
const body = document.querySelector("body");

openshop.addEventListener("click", () => {
  body.classlist.add("active");
});
closeshop.addEventListener("click", () => {
  body.classlist.remove("active");
});

const products = [
  {
    productID: 120045,
    productName: "D&G 3 L'IMPERATRICE",
    price: 77.65,
    quantity: 1,
    imageUrl: "images/perf1.webp",
  },
  {
    productID: 176045,
    productName: "MARC JACOBS DAISY",
    price: 40.99,
    quantity: 1,
    imageUrl: "images/perf2.webp",
  },
  {
    productID: 160335,
    productName: "FRATELLI DIAMANTI- AFRICAN NIGHT",
    price: 46.5,
    quantity: 1,
    imageUrl: "images/perf3.webp",
  },
  {
    productID: 150046,
    productName: "FRATELLI DIAMANTI- CORNO D'ORO",
    price: 45.8,
    quantity: 1,
    imageUrl: "images/perf4.webp",
  },
  {
    productID: 131045,
    productName: "INUKA- ALWAYS WITH YOU",
    price: 64.55,
    quantity: 1,
    imageUrl: "images/perf5.webp",
  },
  {
    productID: 120952,
    productName: "JEAN LANVIN- MY SIN",
    price: 36.5,
    quantity: 1,
    imageUrl: "images/perf6.webp",
  },
  {
    productID: 125408,
    productName: "PENHALIGON- OPUS 1870",
    price: 120.35,
    quantity: 1,
    imageUrl: "images/perf7.webp",
  },
  {
    productID: 140014,
    productName: "BEKHEIT- EAU DE PARFUM",
    price: 26.8,
    quantity: 1,
    imageUrl: "images/perf8.webp",
  },
  {
    productID: 128532,
    productName: "FRATELLI DIAMANTI- AL VENTO",
    price: 48.3,
    quantity: 1,
    imageUrl: "images/perf9.webp",
  },
  {
    productID: 177702,
    productName: "COCO CHANEL- MADMOISELLE",
    price: 64.99,
    quantity: 1,
    imageUrl: "images/perf10.webp",
  },
  {
    productID: 125408,
    productName: "PENHALIGON- OPUS 1870",
    price: 120.35,
    quantity: 1,
    imageUrl: "images/perf11.webp",
  },
  {
    productID: 165577,
    productName: "JEAN LANVIN- MY SIN",
    price: 36.5,
    quantity: 1,
    imageUrl: "images/perf12.webp",
  },
  {
    productID: 173266,
    productName: "RANCE 1795- EAU DE LA COURONNE",
    price: 135.4,
    quantity: 1,
    imageUrl: "images/perf13.webp",
  },
  {
    productID: 147702,
    productName: "ORIFLAME- MARYAMK",
    price: 64.45,
    quantity: 1,
    imageUrl: "images/perf14.webp",
  },
  {
    productID: 121172,
    productName: "GUERLAIN- AQUA ALLEGORI",
    price: 55.99,
    quantity: 1,
    imageUrl: "images/perf15.webp",
  },
  {
    productID: 102456,
    productName: "GUERLAIN- AQUA ALLEGORI 50ML",
    price: 99.25,
    quantity: 1,
    imageUrl: "images/perf16.webp",
  },
];

let cardlist = [];
const displayProducts = () => {
  products.forEach((value, key) => {
    // let itemCont = document.createElement("section");
    // itemCont.classList.add("item");
    // itemCont.innerHTML = `<img src="../${value.imageUrl}" >
    //             <h3 class="title">${value.productName}</h3>
    //             <h4 class="price">${value.price}</h4>
    //             <button onclick="addToCard(${key})">Add To Cart
    //         }</button >`;
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let price = document.createElement("h4");
    // let dedicationDate = document.createElement("button");
    // let card = document.createElement("section");
    // let area = document.createElement("p");

    img.setAttribute("src", `${value.imageUrl}`);
    img.setAttribute("alt", `${value.productName}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "300");
    img.setAttribute("height", "auto");

    name.innerText = `${value.productName}`;
    price.innerHTML = `${value.price}`;
    // location.innerHTML = ` <span class="tag">Location: </span>${temple.location}`;
    // dedicationDate.innerHTML = `<span class="tag">Dedicated on:</span>  ${temple.dedicated}`;
    // area.innerHTML = `<span class="tag">Area in sq ft:</span> ${temple.area}`;

    list.appendChild(img);
    list.appendChild(name);
    list.appendChild(price);
  });
};

displayProducts();
