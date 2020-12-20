//api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}

let url = 'https://api.openweathermap.org/data/2.5/forecast?id=';
let id = '3531673';
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

    let description = data.list[0].weather[0].description;
    document.getElementById('currently-description').innerText = description;

    let temp = Math.round(data.list[0].main.temp)  + ' °F';
    document.getElementById('currently-temp').innerText = temp;

    let humidity = data.list[0].main.humidity  + '%';
    document.getElementById('humidity').innerText = humidity;

    let next = data.list[5].weather[0].description;
    document.getElementById('next-week').innerText = next;
    
  });
