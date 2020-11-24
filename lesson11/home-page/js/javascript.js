const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')
menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
window.onresize = () => { if (window.innerWidth > 800) mainnav.classList.remove('responsive') };


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img')

            h2.textContent = towns[1].name;
            h2.setAttribute("class", "fishh2");
            town.appendChild(h2);

            motto.textContent = "\"" + towns[1].motto + "\"";
            motto.setAttribute("class", "data");
            town.appendChild(motto);

            founded.textContent = "Year Founded: " + towns[1].yearFounded;
            founded.setAttribute("class", "data");
            town.appendChild(founded);

            population.textContent = "Current Population: " + towns[1].currentPopulation;
            population.setAttribute("class", "data");
            town.appendChild(population);

            rainfall.textContent = "Annual Rainfall: " + towns[1].averageRainfall + " inches";
            rainfall.setAttribute("class", "data");
            town.appendChild(rainfall);

            img.setAttribute("src" , towns[1].name + ".jpg");
            img.setAttribute("alt", towns[1].name + ".img");
            img.setAttribute("class", "img0");
            town.append(img);

            document.querySelector('div.town').appendChild(town);
  });

fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img')

            h2.textContent = towns[4].name;
            h2.setAttribute("class", "prestonh2");
            town.appendChild(h2);

            motto.textContent = "\"" + towns[4].motto + "\"";
            motto.setAttribute("class", "data1");
            town.appendChild(motto);

            founded.textContent = "Year Founded: " + towns[4].yearFounded;
            founded.setAttribute("class", "data1");
            town.appendChild(founded);

            population.textContent = "Current Population: " + towns[4].currentPopulation;
            population.setAttribute("class", "data1");
            town.appendChild(population);

            rainfall.textContent = "Annual Rainfall: " + towns[4].averageRainfall + " inches";
            rainfall.setAttribute("class", "data1");
            town.appendChild(rainfall);

            img.setAttribute("src" , towns[4].name + ".jpg");
            img.setAttribute("alt", towns[4].name + ".img");
            img.setAttribute("class", "img1");
            town.append(img);

            document.querySelector('div.town1').appendChild(town);
  });

  fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img')

            h2.textContent = towns[5].name;
            h2.setAttribute("class", "sodah2");
            town.appendChild(h2);

            motto.textContent = "\"" + towns[5].motto + "\"";
            motto.setAttribute("class", "data2");
            town.appendChild(motto);

            founded.textContent = "Year Founded: " + towns[5].yearFounded;
            founded.setAttribute("class", "data2");
            town.appendChild(founded);

            population.textContent = "Current Population: " + towns[5].currentPopulation;
            population.setAttribute("class", "data2");
            town.appendChild(population);

            rainfall.textContent = "Annual Rainfall: " + towns[5].averageRainfall + " inches";
            rainfall.setAttribute("class", "data2");
            town.appendChild(rainfall);

            img.setAttribute("src" , towns[5].name + ".jpg");
            img.setAttribute("alt", towns[5].name + ".img");
            img.setAttribute("class", "img2");
            town.append(img);

            document.querySelector('div.town2').appendChild(town);
  });