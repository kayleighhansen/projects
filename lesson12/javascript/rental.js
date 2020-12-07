const rentalurl = 'https://pardonmygiraffee.github.io/wdd230/lesson12/javascript/rentals.json';

fetch(rentalurl)
    .then(function (response) {
        return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const data = jsonObject['data'];
  });