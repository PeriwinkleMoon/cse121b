/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers () {
    let num1 = Number(document.querySelector("#add1").value);
    let num2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(num1, num2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */

const subract = function (num1, num2) {
    return num1 - num2;
}
const subtractNumbers = function () {
    let num1  = Number(document.querySelector("#subtract1").value);
    let num2  = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subract(num1, num2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => {
    return num1 * num2;
}
const multiplyNumbers = () => {
    let num1  = Number(document.querySelector("#factor1").value);
    let num2  = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(num1, num2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (num1, num2) {
    return num1 / num2;
}

function divideNumbers () {
    let num1 = Number(document.querySelector("#dividend").value);
    let num2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(num1, num2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotalDue () {
    let subtotal = Number(document.querySelector("#subtotal").value);
    if (document.querySelector("#member").checked) {
        subtotal -= ((subtotal / 100) * 20);
        let total = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        let totalElement = document.querySelector("#total");
        totalElement.innerText = `${total.format(subtotal)}`;
    }
    else {
        let total = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        let totalElement = document.querySelector("#total");
        totalElement.innerText = `${total.format(subtotal)}`;
    }
}
document.querySelector("#getTotal").addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = array1;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = array1.filter((num) => num % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = array1.filter((num) => num % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = array1.reduce((sum, num) => sum + num);

/* Output Multiplied by 2 Array */
let multiplied = array1.map((num) => num * 2)
;document.querySelector("#multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multiplied.reduce((sum, num) => sum + num);