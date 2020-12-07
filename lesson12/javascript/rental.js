const rentalurl = 'https://pardonmygiraffee.github.io/wdd230/lesson12/javascript/rentals.json';

fetch(rentalurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);  
        const rentals = jsonObject['rentals'];

            for(i=0; i < 6; i++) {
                console.log(rentals[i]["name"]);
                let name = rentals[i]["name"];
                document.getElementById('scooter'+ i).innerText = name;
            }

            for(i=0; i < 6; i++) {
                console.log(rentals[i]["max-persons"]);
                let persons = rentals[i]["max-persons"];
                document.getElementById('person'+ i).innerText = persons;
            }

            //rentals[0].reservation["half-day"]

            for(i = 0; i < 6; i++) {
                //console.log(rentals[i].reservation["half-day"]);
                let r_halfday = "$" + rentals[0].reservation.fullday;
                document.getElementById('r.half'+ i).innerText = r_halfday;
            }
            
            for(i = 0; i < 6; i++) {
                //console.log(rentals[i].reservation["half-day"]);
                let w_halfday = "$" + rentals[2].reservation.halfday;
                document.getElementById('w.half'+ i).innerText = w_halfday;
            }
  });