// Create paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Create image
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "peepeepoopoo");
document.body.appendChild(newImage);

// Create Section
const newSect = document.createElement("section");
newSect.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language!</p>";
document.body.appendChild(newSect);