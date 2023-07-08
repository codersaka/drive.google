// fetch("https://api.ipify.org?format=json")
//   .then((response) => response.json())
//   .then((data) => {
//     const ipAddress = data.ip;
//     console.log(`Your IP address is: ${ipAddress}`);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// } else {
//   console.error("Geolocation is not supported by this browser.");
// }

// function successCallback(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   console.log("Latitude:", latitude);
//   console.log("Longitude:", longitude);

//   // You can send the latitude and longitude to your server or perform further actions with the location data.
// }

// function errorCallback(error) {
//   console.error("Error getting location:", error.message);
// }

fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    const country = data.country_name;
    const city = data.city;
    const region = data.region;
    const ipAddress = data.ip;

    console.log(data);
    console.log("Country:", country);
    console.log("City:", city);
    console.log("Region:", region);
    console.log(`Your IP address is: ${ipAddress}`);

    // You can use the location data as needed in your application
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const userAgent = navigator.userAgent;
console.log("User Agent:", userAgent);
const browserName = navigator.appName;
console.log("Browser Name:", browserName);
const browserVersion = navigator.appVersion;
console.log("Browser Version:", browserVersion);
const platform = navigator.platform;
console.log("Platform:", platform);
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log("Screen Resolution:", screenWidth, "x", screenHeight);
const language = navigator.language;
console.log("Language:", language);
