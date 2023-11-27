import "./order-summary.scss";
import "../main.scss";

const selectedChallenges = document.querySelectorAll(".os-list__item");
const totalPriceContainer = document.querySelector(".os-total__price__value");

let totalPrice = 0;

// Loop through each selected challenge and add its price to the total price

selectedChallenges.forEach((challenge) => {
  const challengePrice = challenge.querySelector(".os-list__item__price__value").innerText;
  totalPrice += parseFloat(challengePrice);
});

// replace the total price with the calculated total price
totalPriceContainer.innerText = totalPrice.toFixed(2); // toFixed(2) to show only 2 decimals
