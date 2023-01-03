function formateDate(timestamp) {
  let date = new Date(timestamp);
  let hours = timestam.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Mondey",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours} ${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidutyElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = response.data.main.temp;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidutyElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
}

let apiKey = "888b3cf9c21d1a0fa753f7b4a6343481";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
