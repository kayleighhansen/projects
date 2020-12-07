const rentalurl = 'https://pardonmygiraffee.github.io/wdd230/lesson12/javascript/rentals.json';

fetch(rentalurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);  
        const data = jsonObject['data'];
        for (let i = 0; i < 6; i++ ) {

            console.log(pioneer[0]["max-persons"])
            let name = pioneer[0]["max-persons"];
            document.getElementById('scooter-name-' + i).innerText = name;
        }
  });