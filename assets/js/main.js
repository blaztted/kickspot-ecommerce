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

function getSneakerDetails() {
  return sneakersData.map((sneaker) => {
    return {
      id: sneaker.id,
      brand: sneaker.brand,
      model: sneaker.model,
      colorway: sneaker.colorway,
      releaseYear: sneaker.releaseYear,
      price: sneaker.price,
      imageUrl: sneaker.imageUrl,
      sizesAvailable: sneaker.sizesAvailable,
      inStock: sneaker.inStock,
    };
  });
}
const allSneakerDetails = getSneakerDetails();
console.log(allSneakerDetails);

//

function generateProductHTML(sneakersData) {
  return `
    <div class="pro">
      <img src="${sneakersData.imageUrl}" alt="" />
      <div class="des">
        <span>${sneakersData.brand}</span>
        <h5>${sneakersData.model}</h5>
      
        <h4>${sneakersData.price}€</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping fa-lg cart"></i></a>
    </div>
  `;
}

// Function to generate star rating HTML
// function generateStarRating(rating) {
//   const filledStars = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
//   const halfStar =
//     rating % 1 === 0.5 ? '<i class="fas fa-star-half-alt"></i>' : "";
//   const emptyStars = '<i class="far fa-star"></i>'.repeat(
//     5 - Math.ceil(rating)
//   );
//   return filledStars + halfStar + emptyStars;
// }

// Function to render products on the page
function renderProducts() {
  const productContainer = document.getElementById("pro-container"); // Assuming the container has an ID of 'product1'
  allSneakerDetails.forEach((sneaker) => {
    // Using allSneakerDetails array
    const productHTML = generateProductHTML(sneaker); // Pass each sneaker object to generateProductHTML
    productContainer.innerHTML += productHTML;
  });
}

// Call the renderProducts function when the page loads
window.addEventListener("DOMContentLoaded", renderProducts);
