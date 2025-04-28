function updateTime() {

//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
);
}
//Paris
let parisElement = document.querySelector("#paris");
if (parisElement ) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
);}
//Jamaica
let jamaicaElement = document.querySelector("#jamaica");
if (jamaicaElement) {
let jamaicaDateElement = jamaicaElement.querySelector(".date");
let jamaicaTimeElement = jamaicaElement.querySelector(".time");
let jamaicaTime = moment().tz("Jamaica");

jamaicaDateElement.innerHTML = jamaicaTime.format("MMMM Do YYYY");
jamaicaTimeElement.innerHTML = jamaicaTime.format(
    "h:mm:ss [<small>]A[</small>]"
);}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
    <div>
    <h2>${cityTimeZone}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} 
    <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="index.html">Back to all cities</a>`;
}

updateTime();
setInterval (updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change",updateCity);

