let d = new Date ();
let dayName = d.getDay();
let monthName = d.getMonth();
let year = d.getFullYear();

let fullDate = dayName + "/" + monthName+ "/" + year;
document.getElementById("fullDate").textContent = currentDate;

let a = 1;
document.getElementById("a").textContent = currentDate;