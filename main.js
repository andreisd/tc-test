import "./main.scss";
import "./bundle-config.scss";

const selectedChallenges = new Set();
const allChallenges = document.querySelectorAll(".clg-card");
const selectedChallengesContainer = document.querySelector(".clg-selected-list");
const selectedChallengesBar = document.querySelector(".clg-summary");
const totalCostContainer = document.querySelector(".clg-selected-total__price__value");
let totalCost = 0;

// Function to handle Challenge (add/remove), update Selected Challenges Set and Total Cost
const handleChallenge = (challenge, action) => {
  const challengePrice = challenge.querySelector(".clg-card__content__price__value").innerText;

  if (action == "add") {
    totalCost += parseFloat(challengePrice); // add challenge price to the total cost
    selectedChallenges.add(challenge); // add challenge to the set
  } else {
    totalCost -= parseFloat(challengePrice); // remove challenge price from the total cost
    selectedChallenges.delete(challenge); // remove challenge from the set
  }
  updateSelectedChallenges(); // update the selected challenges list
};

const updateSelectedChallenges = () => {
  selectedChallengesContainer.innerHTML = ""; // make sure the list is empty before updating it

  selectedChallenges.forEach((challenge) => {
    const challengeTitle = challenge.querySelector(".clg-card__content__title").innerText;
    const challengePrice = challenge.querySelector(".clg-card__content__price__value").innerText;

    selectedChallengesContainer.innerHTML += `
      <div class="clg-selected-list__item">
        <span>${challengeTitle} - $${challengePrice}</span>
        <i class="fas fa-times"></i>
      </div>
    `;
  });

  totalCostContainer.innerText = ""; // make sure the total cost is empty before updating it
  totalCostContainer.innerText = totalCost.toFixed(2);

  selectedChallenges.size === 0
    ? selectedChallengesBar.classList.add("hide")
    : selectedChallengesBar.classList.remove("hide");
};

allChallenges.forEach((challenge) => {
  const addButton = challenge.querySelector(".btn-add");
  const removeButton = challenge.querySelector(".btn-remove");

  addButton.addEventListener("click", () => {
    handleChallenge(challenge, "add");
    addButton.classList.add("hide");
    removeButton.classList.remove("hide");
  });

  removeButton.addEventListener("click", () => {
    handleChallenge(challenge, "remove");
    removeButton.classList.add("hide");
    addButton.classList.remove("hide");
  });
});
