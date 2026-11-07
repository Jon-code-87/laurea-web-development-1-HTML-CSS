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

// lisätään kuuntelijat painikkeille ja käskee clickkauksesta suorittaamaan fetchRawData function.
rawDataButton.addEventListener("click", function() {
    fetchRawData();
});

// suorittaa luodun funktion ja hakee palvelimelta raakadatan.
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
                console.error("Error fetching raw data:", error);
            });
}




parsedDataButton.addEventListener("click", function() {
    fetchParsedData();
});





    