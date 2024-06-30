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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg",
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg",
  },
  {
    templeName: "Taipei Taiwan Temple",
    location: "Taipei, Taipei, Taiwan",
    dedicated: "1984, November, 17",
    area: 9945,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg",
  },
  {
    templeName: "Apia Samoa Temple",
    location: "Apia, Pesega, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x500/apia-samoa-temple-lds-460475-wallpaper.jpg",
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/800x500/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg",
  },
];

// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple (an absolute address). Make sure to provide an appropriate alt value such as the name of the temple.
// Use native lazy loading to each temple image

const oldTemple = temples.filter((temple) => {
  return temple.dedicated.split(",")[0] < 1900;
});
const newTemple = temples.filter((temple) => {
  return temple.dedicated.split(",")[0] > 2000;
});
const largeTemple = temples.filter((temple) => {
  return temple.area > 90000;
});
const smallTemple = temples.filter((temple) => {
  return temple.area < 10000;
});

const navUl = document.querySelector(".navigation-ul");
const links = navUl.querySelectorAll("a");
const h2 = document.querySelector("h2");

for (let index = 0; index < links.length; index++) {
  links[index].addEventListener("click", () => {
    h2.innerText = links[index].innerText;

    if (links[index].innerText === "Home") {
      createTemple(temples);
    } else if (links[index].innerText === "Old") {
      createTemple(oldTemple);
    } else if (links[index].innerText === "New") {
      createTemple(newTemple);
    } else if (links[index].innerText === "Large") {
      createTemple(largeTemple);
    } else if (links[index].innerText === "Small") {
      createTemple(smallTemple);
    }
  });
}

const createTemple = (templeList) => {
  document.querySelector(".second").innerHTML = "";
  templeList.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicationDate = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.innerText = `${temple.templeName}`;
    location.innerHTML = ` <span class="tag">Location: </span>${temple.location}`;
    dedicationDate.innerHTML = `<span class="tag">Dedicated on:</span>  ${temple.dedicated}`;
    area.innerHTML = `<span class="tag">Area in sq ft:</span> ${temple.area}`;
    img.setAttribute("src", `${temple.imageUrl}`);
    img.setAttribute("alt", `${temple.templeName}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "800");
    img.setAttribute("height", "500");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicationDate);
    card.appendChild(area);
    card.appendChild(img);

    card.setAttribute("class", "card");

    document.querySelector(".second").appendChild(card);
  });
};

createTemple(temples);
