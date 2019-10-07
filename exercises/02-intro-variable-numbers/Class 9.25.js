// With if statements
const animal = "leopard";

if (animal === "cow") {
  console.log("Moo");
} else if (animal === "lion" || animal === "leopard") {
  console.log("Roar!");
  // Roar!
} else {
  console.log("?");
}

// With switch statements
const animal = "fox";

switch (animal) {
  case "cow":
    console.log("Moo");
    break;
  case "lion":
  case "leopard":
    console.log("Roar!");
    // Roar!
    break;
  default:
    console.log("?");
}

// With if statements
const price = 2;
let priceDisplay = "";

if (price > 0) {
  priceDisplay = "$" + price.toFixed(2);
} else {
  priceDisplay = "FREE";
}
console.log(priceDisplay); // $2.00

// With the ternary operator
const price = 2;

const priceDisplay = price > 0 ? "$" + price.toFixed(2) : "FREE";

console.log(priceDisplay); // $2.00

const today = "Monday";

let isLunchFreeToday = today === "Monday" ? true : false;

// Often used for displaying a default value
let searchResults;
// ...
console.log(searchResults || "No results found.");

let hasError = true;

// Without short circuiting
if (hasError) {
  console.log("Oh no! There was an unexpected error. Please try again later.");
  // Oh no! There was an unexpected error. Please try again later.
}

// Short circuiting
hasError &&
  console.log("Oh no! There was an unexpected error. Please try again later.");
// Oh no! There was an unexpected error. Please try again later.

function greet() {
  // code here
}

let greet = () => {
  // or var
  // code here
};

window.setTimeout(() => {
  // the anonymous function
  // is the () => {} that is not named
}, 500);

(() => {
  // code here
})();

var withVar = undefined;

function withFunction() {
  console.log("function");
}

const withConst = () => console.log("const");

let withLet = () => console.log("let");

var withVar = function() {
  console.log("var");
};

function withFunction() {
  console.log("function");
}

greet(); // What happens here?
const greet = () => {
  console.log("Hello World");
};

greet(); // What happens here?
var greet = () => {
  console.log("Hello World");
};

greet(); // What happens here?
function greet() {
  console.log("Hello World"); // Hello World
}

const greet = (firstName, lastName) => {
  console.log("Hello", firstName, lastName);
};

greet("Barbara", "Walters"); // Hello Barbara Walters

const displayError = (status, message) => {
  console.log(status);
  console.log(message);
};

displayError();

const displayError = (
  status = "error",
  message = "Oops! Something went wrong."
) => {
  console.log(status); // warning
  console.log(message); // Oops! Something went wrong.
};

displayError("warning");

const multiplyTen = num => {
  return 10 * num;
};

const multiplyTen = num => {
  return 10 * num;
};

console.log(multiplyTen(3)); // 30

// Variable assignment
const myNewNumber = multiplyTen(4);
console.log(myNewNumber); // 40

const add = (a, b) => {
  return a + b;
};

const greet = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}`;
};

const isPositiveNumber = num => {
  return num > 0;
};

const greetLater = () => {
  return () => {
    console.log("Hello");
  };
};

const greet = () => {
  console.log("Hello World");
};

const greeting = greet();
console.log(greeting); // What is this?

// If the code inside the function
// can fit on one line,
// and returns a value,
// you can use an even shorter syntax
const add = (a, b) => a + b;

// If there is only one parameter,
// you do not have to include the ( )
const addOne = a => a + 1;

const myFunction = () => {
  console.log("I will execute"); // I will execute
  return;
  console.log("But not me");
};

myFunction();

const displayCost = (cost, currency) => {
  if (currency) return currency + cost.toFixed(2); // Execution stops if currency
  return cost.toFixed(2);
};

console.log(displayCost(4.3, "$")); // $4.30
console.log(displayCost(4.3)); // 4.30

// If the code inside the function
// can fit on one line,
// and returns a value,
// you can use an even shorter syntax
const add = (a, b) => a + b;

var restaurant = "Outback Steakhouse";

if (true) {
  var restaurant = "Chipotle";
}

console.log(restaurant); // What is this?

if (true) {
  var store = "Walmart";
}

console.log(store); // Walmart

if (true) {
  let store = "Walmart";
}

console.log(store); // Throws ReferenceError

const greet = name => {
  var greeting = "Hello " + name;
  return greeting;
};

console.log(greeting); // Throws ReferenceError
