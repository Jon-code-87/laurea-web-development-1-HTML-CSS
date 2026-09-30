<<<<<<< HEAD
// Tehtävä 1

=======
>>>>>>> 932250ed1312559452b35fea8763e6bb0f6af65d
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
<<<<<<< HEAD
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
animalImage.src = "Images/tiger.png";
animalImage.alt = "Tämä on tiikeri";
animalDescription.textContent =
"Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";
}
=======
>>>>>>> 932250ed1312559452b35fea8763e6bb0f6af65d
});