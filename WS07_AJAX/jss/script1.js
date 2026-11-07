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
// haetaan tiedot palvelimelta parsimista  varten. 
function fetchParsedData() {
    fetch("https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.Search);
            const parsedDataDiv = document.getElementById("rawdata"); 
            parsedDataDiv.innerHTML = "";
// luodaan taulukko html elementtiin, joka sisältää otsikot Title ja Year.
            let table = `
            <table>
                 <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Poster</th>
                 </tr>
            `;  

// luotu silmukka joka käy läpi data.Searchin listan ja lisää tiedot html elementtiin.
            for (let i = 0; i < data.Search.length; i++) {
                console.log(data.Search[i].Title);
// lisätään taulukkoon rivit, jotka sisältävät Title ja Year tiedot ja posterin.
                table += `
                <tr>
                    <td>${data.Search[i].Title}</td>
                    <td>${data.Search[i].Year}</td>
                    <td><img src="${data.Search[i].Poster}" alt="Poster" width="100"></td>
                </tr>`;

            }
                 table += "</table>";

                parsedDataDiv.innerHTML = table;

        })
        .catch(error => {
            console.error("Ei parsed dataa!:", error);
        });

    }

 //Haetaan Hae data -painike HTML:stä.
const weatherButton = document.getElementById("weatherButton");

// Haetaan div, johon säätiedot näytetään.
const weatherDataDiv = document.getElementById("weatherdata");

// OpenWeatherMap API-avain.
const apiKey = "824adfe11d5dfb320b78c1d2d8029787";

// Lisätään painikkeelle click-kuuntelija.
weatherButton.addEventListener("click", function () {

// Kutsutaan säätiedot hakevaa funktiota.
    fetchWeatherData();

});

// Funktio hakee säätiedot OpenWeatherMap API:sta.
function fetchWeatherData() {

// Näytetään käyttäjälle, että tietoja haetaan.
    weatherDataDiv.textContent = "Haetaan säätietoja...";

// Haetaan pudotusvalikosta valittu kaupunki.
const city = document.getElementById("city").value;

    // Lähetetään pyyntö OpenWeatherMap API:lle.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        // Muutetaan palvelimen vastaus JSON-muotoon.
        .then(response => response.json())

        // Käsitellään saatu data.
        .then(data => {

            // Tulostetaan koko JSON-data konsoliin tarkastelua varten.
            console.log(data);

            // Haetaan lämpötila.
            const temperature = data.main.temp;

            // Haetaan ilmankosteus.
            const humidity = data.main.humidity;

            // Haetaan pilvisyys.
            const clouds = data.clouds.all;

            // Näytetään tiedot sivulla.
            weatherDataDiv.innerHTML = `
                <p>Lämpötila: ${temperature} °C</p>
                <p>Ilmankosteus: ${humidity} %</p>
                <p>Pilvisyys: ${clouds} %</p>
            `;

        })

        // Jos haku epäonnistuu, näytetään virhe.
        .catch(error => {

            console.error(error);

            weatherDataDiv.textContent =
                "Säätietojen haku epäonnistui.";

        });
}


// Haetaan hakupainike HTML-sivulta.
const searchButton = document.getElementById("search");

// Lisätään hakupainikkeelle click-tapahtuma.
searchButton.addEventListener("click", function () {

    // Haetaan käyttäjän kirjoittama kaupunki syötekentästä.
    const city = document.getElementById("citysearch").value;

    // Lähetetään pyyntö OpenWeatherMap API:lle käyttäjän syöttämällä kaupungilla.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        // Muutetaan palvelimen vastaus JSON-muotoon.
        .then(response => response.json())

        // Käsitellään saatu säädata.
        .then(data => {

            // Haetaan lämpötila.
            const temperature = data.main.temp;

            // Haetaan ilmankosteus.
            const humidity = data.main.humidity;

            // Haetaan pilvisyys.
            const clouds = data.clouds.all;

            // Näytetään säätiedot sivulla.
            weatherDataDiv.innerHTML = `
                <h3>${city}</h3>
                <p>Lämpötila: ${temperature} °C</p>
                <p>Ilmankosteus: ${humidity} %</p>
                <p>Pilvisyys: ${clouds} %</p>
            `;
        })

        // Jos haku epäonnistuu, näytetään virheilmoitus.
        .catch(error => {
            console.error(error);
            weatherDataDiv.textContent = "Säätietojen haku epäonnistui.";
        });

        });