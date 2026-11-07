// lisätään kuuntelijat painikkeille
document.getElementById("showNamesBtn").addEventListener("click", showNames);
document.getElementById("showAllBtn").addEventListener("click", showAll);


var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

function showNames() {

    let result = "";

    for (let i = 0; i < obj.employees.length; i++) {

        result += obj.employees[i].firstName +
                  " " +
                  obj.employees[i].lastName +
                  "<br>";
    }

    document.getElementById("jsondata").innerHTML = result;
}

function showAll() {

    let result = "";

    for (let i = 0; i < obj.employees.length; i++) {

        let employee = obj.employees[i];

        result += "Etunimi: " + employee.firstName +
                  ", Sukunimi: " + employee.lastName +
                  "<br>";
    }

    document.getElementById("jsondata").innerHTML = result;
}
// kutsutaa rawdata ja parsedbuttonia
const rawDataButton = document.getElementById("Rawbutton");
const parsedDataButton = document.getElementById("Parsedbutton");

// lisätään kuuntelijan Lataa raaka data -painikkeelle ja käskee clickkauksesta suorittaamaan fetchRawData function.
rawDataButton.addEventListener("click", function() {
    fetchRawData();
});

// suorittaa luodun funktion "Lataa Raaka data napille." ja hakee palvelimelta raakadatan ja lisää tiedot consoleen ja html elementtiin.
    function fetchRawData() {
        fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
            .then(response => response.text())
            .then(data => {
                console.log(data);
                const rawDataDiv = document.getElementById("rawdata");
                rawDataDiv.innerHTML = data;
            })
            // Antaa errorin jos haku ei onnistu.
            .catch(error => {
                console.error("Ei raaka dataa!:", error);
            });
}




parsedDataButton.addEventListener("click", function() {
    fetchParsedData();
});
function fetchParsedData() {
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.Search);
            const parsedDataDiv = document.getElementById("rawdata"); 
            parsedDataDiv.innerHTML = "";
            // luotu silmukka joka käy läpi data.Searchin listan ja lisää tiedot html elementtiin.
            for (let i = 0; i < data.Search.length; i++) {
                console.log(data.Search[i]);
            
           
        })
        .catch(error => {
            console.error("Ei parsed dataa!:", error);
        });