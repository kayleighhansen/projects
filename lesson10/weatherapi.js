let url = 'http://api.openweathermap.org/data/2.5/weather?id=';
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

    let temp = data.main.temp;
    document.getElementById('current-temp').innerText = temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + 
                      data.weather[0].icon + 
                      '.png';  

    const desc = data.weather[0].description;  

    console.log(imagesrc);

    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc); 
    document.getElementById('icon').setAttribute('alt', desc);
  });

