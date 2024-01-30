/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile ={
    name: "Ella Moon",
    photo: "images/AND_4313.png",
    favoriteFoods: [
        "Jerk Chicken",
        "Fried Eggs on Toast",
        "Key Lime Pie",
        "Pasta Salad"
    ],
    hobbies: [
        "Illustration",
        "Worldbuilding",
        "Writing",
        "Gaming"
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
    // If you insist...
    
myProfile.placesLived.push(
    {
        place: "Clarkdale, AZ",
        length: "2 years"
    },
    {
        place: "Orem, UT",
        length: "1 year"
    },
    {
        place: "Manhattan, NY",
        length: "3 months"
    },
    {
        place: "Campbellsville, KY",
        length: "2 years"
    },
    {
        place: "Lake Stevens, WA",
        length: "1 year"
    },
    {
        place: "Plain City, UT",
        length: "1 year"
    },
    {
        place: "Norman, OK",
        length: "1 year"
    },
    {
        place: "Logan, UT",
        length: "1 year"
    },
    {
        place: "Nibley, UT",
        length: "1 year"
    },
    {
        place: "Vermillion, SD",
        length: "2 years"
    },
    {
        place: "Christiansburg, VA",
        length: "5 years"
    },
    {
        place: "Farr West, UT",
        length: "1 year"
    },
    {
        place: "South Jordan, UT",
        length: "4 months"
    }
     
); // Figuring out where I lived when possibly took me almost as 
    // much time as the rest of the assignment itself.


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let imageElement = document.querySelector("#photo");
imageElement.src = myProfile.photo;
imageElement.setAttribute("alt", `${myProfile.name}'s profile picture.`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    const newItem = document.createElement("li");
    newItem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(newItem);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    const newItem = document.createElement("li");
    newItem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(newItem);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    const newPlace = document.createElement("dt");
    const newLength = document.createElement("dd");
    newPlace.textContent = place.place;
    newLength.textContent = place.length;
    document.querySelector("#places-lived").appendChild(newPlace);
    document.querySelector("#places-lived").appendChild(newLength);
});

