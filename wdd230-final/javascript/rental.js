const rentalurl = 'https://kayleighhansen.github.io/projects/wdd230-final/javascript/rentals.json';

fetch(rentalurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);  
        const rentals = jsonObject['rentals'];

            for(i=0; i < 6; i++) {
                let name = rentals[i]["name"];
                document.getElementById('scooter'+ i).innerText = name;
            }

            for(i=0; i < 6; i++) {
                let persons = rentals[i]["max-persons"];
                document.getElementById('person'+ i).innerText = persons;
            }

            for(i = 0; i < 6; i++) {
                let r_halfday = "$" + rentals[i].reservation.fullday;
                document.getElementById('r.half'+ i).innerText = r_halfday;
            }
            
            for(i = 0; i < 6; i++) {
                let r_fullday = "$" + rentals[i].reservation.halfday;
                document.getElementById('r.full'+ i).innerText = r_fullday;
            }

            for(i = 0; i < 6; i++) {
                let w_halfday = "$" + rentals[i].walk.halfday;
                document.getElementById('w.half'+ i).innerText = w_halfday;
            }

            for(i = 0; i < 6; i++) {
                console.log(rentals[i].walk.fullday)
                let w_fullday = "$" + rentals[i].walk.fullday;
                document.getElementById('w.full'+ i).innerText = w_fullday;
            }
  });