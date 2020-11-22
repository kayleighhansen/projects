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

    let temp = data.main.temp;
    document.getElementById('temp').innerText = temp;

    let high_temp = data.main.temp_max;
    document.getElementById('high').innerText = high_temp;

    let humidity = data.main.humidity;
    document.getElementById('humidity').innerText = humidity;

    let speed = data.wind.speed;
    document.getElementById('speed').innerText = speed;

    let chill = 0;
    document.getElementById('chill').innerText = chill;

    const imagesrc = 'https://openweathermap.org/img/w/' + 
                      data.weather[0].icon + 
                      '.png';  

    const desc = data.weather[0].description;  

    console.log(imagesrc);
  });