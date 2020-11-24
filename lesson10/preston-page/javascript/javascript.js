//Navigation Stuff

const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')
menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
window.onresize = () => { if (window.innerWidth > 800) mainnav.classList.remove('responsive') };

//Alert Stuff

var day = new Date();
if (day.getDay() == 5) {
  document.getElementById("alert").style.backgroundColor= "yellow";
  document.getElementById("alert").style.display= "block";
  document.getElementById("alert").style.fontWeight= "bold";
}

//let d = new Date ();
//let year = d.getFullYear();
//document.getElementById("copywriteYear").textContent = year;

//Footer Stuff

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("currentDate").textContent = today;


//Days of the week stuff

let d = new Date();
day = 'today';


