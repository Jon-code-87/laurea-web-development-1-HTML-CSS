// Tehtävä 1

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");
changeStyleButton.addEventListener("click", function () {
taskOneHeading.classList.toggle("highlight");
});


const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");
changeTextButton.addEventListener("click", function () {
animalText.textContent =
"Ja ne asustelevat Afrikassa.";
});





// Tehtävä 2

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";

const animalParagraph = document.createElement("p");
animalParagraph.textContent =
"Tiikeri on maailman suurin kissaeläin.";


const animalPicture = document.createElement("img");
animalPicture.src = "images/tiger.png";
animalPicture.alt = "Tiikeri";

animalHeading.classList.add("animal-heading");

animalContent.append(
animalHeading,
animalParagraph,
animalPicture
);


const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function () {
animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function () {
animalContent.style.display = "block";
});





// Tehtävä 3
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("Nappia Painettu!");
});
 




const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
const selectedAnimal = animalSelect.value;
console.log("selected animal:", selectedAnimal);

if (selectedAnimal === "tiger") {
animalName.textContent = "Tiikeri";
animalImage.src = "images/tiger.png";
animalImage.alt = "Tämä on tiikeri";
animalDescription.textContent =
"Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";

}


if (selectedAnimal === "elephant") {
animalName.textContent = "Elefantti";
animalImage.src = "images/elephant.png";
animalImage.alt = "Elefantti";
animalDescription.textContent =
"Elefantit ovat maailman suurimpia maaeläimiä.";
}
 
if (selectedAnimal === "penguin") {
animalName.textContent = "Pingviini";
animalImage.src = "images/penguin.png";
animalImage.alt = "Pingviini";
animalDescription.textContent =
"Pingviinit ovat lentokyvyttömiä lintuja.";
}
 
if (selectedAnimal === "panda") {
animalName.textContent = "Panda";
animalImage.src = "images/panda.png";
animalImage.alt = "Panda";
animalDescription.textContent =
"Pandat syövät pääasiassa bambua.";
}



});


animalImage.addEventListener("mouseenter", function () {
animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function () {
animalImage.classList.remove("image-highlight");
});
