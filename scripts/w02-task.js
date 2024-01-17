/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Ella Moon";
let currentYear = "2024";
let profilePicture = "images/AND_4313.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

// Creating favorite foods array
const favFoods = ["Pork Lo Mein", " Chocolate Turnovers", " Over-easy Eggs & Bacon", " Pasta Salad"];
const newPara = document.createElement("p");
newPara.innerHTML = favFoods;
foodElement.appendChild(newPara);
// Adding a food
const favFood = " Banana Bread";
favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}<br>`;
// Removing the first food
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}<br>`;
// Removing the last element in the array
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}<br>`;