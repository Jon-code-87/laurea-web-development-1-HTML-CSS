const AnimalButton = document.getElementById("AnimalButton");
AnimalButton.addEventListener("click", function() {
alert("You clicked me!");
});

function showTable() {
    const animal1 = "Tiikeri";
    const habitat1 = "Metsä";
    const diet1 = "Liha";

    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal1}</td>
                <td>${habitat1}</td>
                <td>${diet1}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}


const harjoitus1 = document.querySelector("#harjoitus1");
const harjoitus2 = document.querySelector("#harjoitus2");

harjoitus2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

harjoitus1.addEventListener("click", function() {
    harjoitus1.style.color = "red";
    harjoitus1.innerHTML = "Bye bye mouse!";
});

// Harjoitus 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi tähän!";
    feedback.style.backgroundColor = "#ffffcc";
});

feedback.addEventListener("blur", function() {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function() {
    const text = feedback.value;

    charcount.innerHTML = text.length + "/200";
    preview.innerHTML = text;
});
