let names = ["Nancy","Blessing","Jorge","Svetlana","Bob"];

// 1. Array Filter method
const namesB = names.filter((name) => name.includes("B"));
// I realize looking at the answer that if the list included names that
// didn't start with B, but had it somewhere in the name they would also
// be included in the list. It is not the correct solution.
console.log(namesB);

// 2. Array Map method
const namesLength = names.map((name) => name.length);

console.log(namesLength);

// 3. Array Reduce method
const namesAverage = names.reduce((total, name) => total + name.length, 0) / names.length;
// I couldn't figure this one out on my own and had to look at the solution
console.log(namesAverage);

// ACTIVITY 1 - MAP

const myList = ["one", "two", "three"];
const listHtml = myList.map(function (item) {
    return `<li>${item}</li>`;
});
document.getElementById("myList").innerHTML = listHtml.join("");

// ACTIVITY 2 - MAP

const letterGrades = ["A", "B", "A"];

function getGpa(letter){
    let gpa = 0;
    if (letter === "A"){
        gpa = 4;
    }
    else if (letter === "B"){
        gpa = 3;
    }
    return gpa     
} const gpaArray = letterGrades.map(getGpa);

console.log(gpaArray);

// ACTIVITY 3 - REDUCE

const gpaTotal = gpaArray.reduce((total, item) => total + item / gpaArray.length);
console.log(gpaTotal);

// ACTIVITY 4 - FILTER

const fruits = ["watermelon", "peach", "apple", "totamto", "grape"];
const fruitsSix = fruits.filter((fruit) => fruit.length > 6);
console.log(fruitsSix);

// ACTIVITY 5 INDEXOF

const array = [12, 34, 21, 54];
const luckNumber = 21;
console.log(array.indexOf(luckNumber));