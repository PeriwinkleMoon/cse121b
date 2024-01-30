// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
// FOREACH FUCNTION
// function getFavoriteFoods() {
//     myInfo.favoriteFoods.forEach(food => {
//         let favFood = document.createElement("li");
//         favFood.textContent = food;
//         document.querySelector("#favorite-foods").appendChild(favFood);
//     });
// };

// getFavoriteFoods();
// ACTIVITY 3
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");

function listTransform(list, callbackTemplate) {
    const htmlList = list.map(callbackTemplate);
    return htmlList.join("");
}
function getFoodString(food) {
    return `<li>${food}</li>`;
}

// getFoodString();
//2.
function getPlaceString(place) {
        return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}
foodsElement.innerHTML = listTransform(
    myInfo.favoriteFoods, 
    getFoodString
);
placesElement.innerHTML = listTransform(
    myInfo.placesLived, 
    getPlaceString
);

  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);