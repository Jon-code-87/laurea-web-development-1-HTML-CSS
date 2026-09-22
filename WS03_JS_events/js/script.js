const animalButton = document.getElementById("animalButton");

animalButton.addEventListener("click", function() {
alert("You clicked me!");
});

const animal = "Tiikeri";
const habitat = "Metsä";
const diet = "Liha";

const table = 
    <table>
        <tr>
            <th>Eläin</th>
            <th>Elinympäristö</th>
            <th>Ruokavalio</th>
        </tr>
        <tr>
    <td>Norsu</td>
    <td>Savanni</td>
    <td>Kasvit</td>
</tr>
        <tr>
            <td>${animal}</td>
            <td>${habitat}</td>
            <td>${diet}</td>
        </tr>
    </table>
;
const tableContainer = document.getElementById("tableContainer");
const tableButton = document.getElementById("tableButton");
tableButton.addEventListener("click", function() {
    tableContainer.innerHTML = table;
});