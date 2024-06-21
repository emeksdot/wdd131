const currentYear = document.querySelector("#currentyear");
const year = new Date().getFullYear();

const lastModfiedDate = document.querySelector("#lastModified");
currentYear.innerHTML = year;

lastModfiedDate.innerHTML = new Date(document.lastModified);

// If using ºC and km/h: Wind chill temperature = 13.12 + 0.6215T - 11.37V0.16 + 0.3965TV0.16
const calculateWindChill = (temperature, windSpeed) => {
  let windChill = "";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill =
      13.12 +
      0.6215 * temperature -
      11.37 * windSpeed ** 0.16 +
      0.3965 * temperature * windSpeed ** 0.16;
    return windChill.toFixed(2);
  } else {
    return "N/A";
  }
};

const windChillFactor = document.querySelector(".windChillFactor");
windChillFactor.textContent = calculateWindChill(27, 5);
