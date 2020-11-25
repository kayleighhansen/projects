
//Five Day Forecast 

let url2 = 'https://api.openweathermap.org/data/2.5/forecast?id=';
let id2 = '5607916';
let apiKey2 = 'cd4be470d33a0e4c2b2a197c2c84f2ae';
let units2 = "imperial";

let apiURL2 = url2 + 
              id2 + 
              "&appid=" + apiKey2 +
              "&units=" + units2; 

//http://api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}

console.log(apiURL2);

fetch(apiURL2)
  .then(response => response.json())
  .then(data => {

    console.log(data);

    let day1 = data.list[1].main.temp + "° F";
    document.getElementById('forecast-temp1').innerText = day1;

    for (let i = 1; i <= 5; i++ ) {
        //daily temperatures
        let day = Math.round(data.list[i].main.temp * 10) / 10 + "° F";
        document.getElementById('forecast-temp' + i).innerText = day;
        
        const imagesrc = 'https://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png';  
          console.log(imagesrc);

          // weather icons

        document.getElementById('weather-png-' + i).textContent = imagesrc + i;
        document.getElementById('weather-png-' + i).setAttribute('src', imagesrc); 
        document.getElementById('weather-png-' + i).setAttribute('alt', i);
    }
      var d = new Date();
      var n = d.getDay();

    for (let i = 1; i <= 5; i++ ) {
      var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      n += 1;
      if (n >= 7){
        n -= 7;
      }
      document.getElementById("day" + i).innerHTML = arrayOfWeekdays[n];
  }

}); 