function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector("#.date");
    let lostAngelesTimeElement = losAngelesTimeElement.querySelector("#.time")
    let losAngelesTimeElement = moment().tz("#America/Los-Angeles");


    losAngelesDateElement.innerHTML = losAngelesTimeElement.format("MMMM Do YYYY");
    lostAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small]>A[</small>]");
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector("#.date");
    let parisTimeElement = parisElement.querySelector("#.time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();  
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = 
    <div class = "city">
      <div>
    <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
  <a href = "/">All cities</a>
  ;
}
updateTime();
setinterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesElement.addEventListener("change", updateCity);