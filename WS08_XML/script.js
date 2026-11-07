// OpenWeatherMap API-avain.
const apiKey = "824adfe11d5dfb320b78c1d2d8029787";

// Haetaan div, johon säätiedot näytetään.
const weatherdata = document.getElementById("weatherdata");


// =========================
// VAIHE 1: HAE DATA -NAPPI
// =========================

// Lisätään kuuntelija Hae data -painikkeelle.
document.getElementById("haeData").addEventListener("click", async function () {

    // Näytetään käyttäjälle ilmoitus.
    weatherdata.textContent = "Haetaan säätietoja...";

    try {

        // Haetaan pudotusvalikosta valittu kaupunki.
        const city = document.getElementById("city").value;

        // Lähetetään pyyntö OpenWeatherMap API:lle.
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&appid=${apiKey}`
        );

        // Tarkistetaan onnistuiko haku.
        if (!response.ok) {
            throw new Error(`HTTP-virhe: ${response.status}`);
        }

        // Luetaan vastaus XML-tekstinä.
        const xmlText = await response.text();

        // Muutetaan XML käsiteltävään muotoon.
        const xml = new DOMParser().parseFromString(
            xmlText,
            "application/xml"
        );

        // Poimitaan XML-datasta lämpötila.
        const temperature =
            xml.querySelector("temperature").getAttribute("value");

        // Poimitaan XML-datasta kosteus.
        const humidity =
            xml.querySelector("humidity").getAttribute("value");

        // Poimitaan XML-datasta pilvisyys.
        const clouds =
            xml.querySelector("clouds").getAttribute("value");

        // Näytetään tiedot sivulla.
        weatherdata.textContent =
            `${city}: lämpötila ${temperature} °C, kosteus ${humidity} %, pilvisyys ${clouds} %`;

    } catch (error) {

        // Näytetään virheilmoitus.
        weatherdata.textContent =
            "Säätietojen haku epäonnistui: " + error.message;
    }
});


// ==============================
// VAIHE 2: HAKUKENTTÄ JA HAE
// ==============================

// Lisätään kuuntelija hakupainikkeelle.
document.getElementById("search").addEventListener("click", async function () {

    // Näytetään käyttäjälle ilmoitus.
    weatherdata.textContent = "Haetaan säätietoja...";

    try {

        // Haetaan käyttäjän kirjoittama kaupunki.
        const city = document.getElementById("citysearch").value.trim();

        // Tarkistetaan että kenttään on kirjoitettu jotain.
        if (!city) {
            weatherdata.textContent = "Kirjoita kaupungin nimi.";
            return;
        }

        // Lähetetään API-kutsu.
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&appid=${apiKey}`
        );

        // Tarkistetaan onnistuiko haku.
        if (!response.ok) {
            throw new Error(`HTTP-virhe: ${response.status}`);
        }

        // Luetaan XML-data.
        const xmlText = await response.text();

        // Muutetaan XML käsiteltävään muotoon.
        const xml = new DOMParser().parseFromString(
            xmlText,
            "application/xml"
        );

        // Poimitaan säätiedot.
        const temperature =
            xml.querySelector("temperature").getAttribute("value");

        const humidity =
            xml.querySelector("humidity").getAttribute("value");

        const clouds =
            xml.querySelector("clouds").getAttribute("value");

        // Näytetään tiedot sivulla.
        weatherdata.textContent =
            `${city}: lämpötila ${temperature} °C, kosteus ${humidity} %, pilvisyys ${clouds} %`;

    } catch (error) {

        // Näytetään virheilmoitus.
        weatherdata.textContent =
            "Säätietojen haku epäonnistui: " + error.message;
    }
});