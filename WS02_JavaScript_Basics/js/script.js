// print hello, world! 

console.log("Hello, world!");

// Variables

const userName = "Jon";
let age = 38;
const favoriteAnimal = "cat";

console.log("My name is " + userName);
console.log(age);
console.log("My favorite animal is " + favoriteAnimal);

console.log(
    "Hello! My name is " +
    userName +
    " and my favourite animal is " +
    favoriteAnimal +
    "."
);

// User input

const visitorName = prompt("What is your name?");

console.log("Hello " + visitorName + "! Welcome to JavaScript.");

// Conditionals

let visitorAge = prompt("How old are you?");

if (visitorAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Functions

function greetUser(name) {
    console.log("Hello " + name + "! Welcome to JavaScript.");
}

greetUser("Jon");
greetUser("Pekka");

// Button

function showMessage() {
    alert("JavaScript works!");
}