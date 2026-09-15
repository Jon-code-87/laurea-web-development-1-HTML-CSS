// STEP 1: Print text to the browser console is string ""

console.log("Hello, world!");

// STEP 2: Variables

// Store text values in variables

const userName = "Jon";
let age = 38;
const favoriteAnimal = "Cat";


// Print the variables to the console
console.log("my name is " + userName);
console.log(age);
console.log("My favorite animal is " + favoriteAnimal);

console.log(
"Hello! My name is " +
userName +
" and my favourite animal is " +
favoriteAnimal +
"."
);
// STEP 3: User interaction
// Display a pop-up message
alert("Tervetuloo mun hienoille nettisivuille!")

// Ask the user for their name

const visitorName = prompt("Mikä on sun Nimi?")

// Print the user's answer
console.log("Terve " + visitorName +  "! Tervetuloa javasricptin pariin!");

let visitorAge = prompt("Kuinka vanha olet?");

if (visitorAge >= 18) {
 console.log("Olet aikuinen");
} else {
    console.log("Olet alle 18 vuotta.");
}


const visitorFavoriteAnimal = prompt("Mikä on sun lempieläin?");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");

function greetUser(name) {
console.log("Hello " + name + "!");
}
greetUser("Jon");
greetUser("Emma");

function showMessage() {
alert("JavaScript works!");
}