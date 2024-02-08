/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const templeName = document.createElement("h3");
        templeName.innerText = temple.templeName;
        const templeImg = document.createElement("img");
        templeImg.src = temple.imageUrl;
        templeImg.alt = temple.location;

        templesElement.appendChild(articleElement);
        articleElement.appendChild(templeName);
        articleElement.appendChild(templeImg);
        console.log("run");
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

/* filterTemples Function */
function filterTemples(temples) {
    reset(templesElement);
    console.log("pass");
    const filter = document.getElementById("filtered").value;
    console.log("pass");
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) =>
            temple.location.includes("Utah")));
            console.log("pass");
            break;
        case "notutah":
            displayTemples(temples.filter((temple) =>
            !temple.location.includes("Utah")));
            console.log("pass");
            break;
        case "older":
            displayTemples(temples.filter((temple) => 
            new Date(temple.dedicated) < new Date(1950, 0, 1)));
            console.log("pass");
            break;
        default:
            displayTemples(temples);
            console.log("pass");
    }
}

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList)});


getTemples();