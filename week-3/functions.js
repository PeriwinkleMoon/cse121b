
let firstName = 'Antonia';
let lastName = 'Francesca';

// 1. DEFINING FUNCTION
function fullName(first, last) {
    return `${first} ${last}`;
}

// // 2. FUNCTION EXPRESSION
// const fullNameExpressed = function (first, last) {
//     return `${first} ${last}`;
// }

// // 3. ARROW FUNCTION
// const fullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

// 4. WRTIE HTML
document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);
