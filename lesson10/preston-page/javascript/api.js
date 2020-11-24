let url = 'https://api.openweathermap.org/data/2.5/weather?id=';
let id = '5604473';
let apiKey = 'c6ac91f3077adb38e3107379cad73e51';
let units = "imperial";


let apiURL = url +
  id +
  "&appid=" + apiKey +
  "&units=" + units;

console.log(apiURL);

fetch(apiURL)
  .then(response => response.json())
  .then(data => {

    console.log(data);
    console.log(data.weather[0].description);

    let description = data.weather[0].description;
    document.getElementById('currently').innerText = description;

    let temp = data.main.temp + "° F";
    document.getElementById('temp').innerText = temp;

    let high_temp = data.main.temp_max + "° F";
    document.getElementById('high').innerText = high_temp;

    let humidity = data.main.humidity + "%";
    document.getElementById('humidity').innerText = humidity;

    let speed = data.wind.speed + " mph";
    document.getElementById('speed').innerText = speed;

    let formula = 13.12 + (0.6215 * data.main.temp) - (11.37 * (data.wind.speed ^ 0.16)) + ((0.3965 * data.main.temp) * (data.wind.speed ^ 0.16));
    chill = Math.round(formula * 10) / 10 + "° F";
    document.getElementById('chill').innerText = chill;
  });