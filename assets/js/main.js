const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const locationButton = document.getElementById("btn-map");

// Add click event listener to the button
locationButton.addEventListener("click", redirectToGoogleMaps);

// Function to redirect to Google Maps with the specified address
function redirectToGoogleMaps() {
  const mapsUrl =
    "https://www.google.com/maps/place/Lucky+Bastard/@38.8077894,-9.1842235,15z/data=!4m2!3m1!1s0x0:0x8602d9b455cd5e12?sa=X&ved=1t:2428&ictx=111";
  // Open the Google Maps URL in a new tab
  window.open(mapsUrl, "_blank");
}

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
