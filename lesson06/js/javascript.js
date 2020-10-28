const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')
menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
window.onresize = () => { if (window.innerWidth > 800) mainnav.classList.remove('responsive') };

var day = new Date();
if (day.getDay() == 5) {
  document.getElementById("alert").style.backgroundColor= "yellow";
  document.getElementById("alert").style.display= "block";
  document.getElementById("alert").style.fontWeight= "bold";
}

let d = new Date ();
let year = d.getFullYear();
document.getElementById("copywriteYear").textContent = year;


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("currentDate").textContent = today;


speed = 40;
temp = 30;

x = Math.pow(speed, 0.16);
y = 35.74 + 0.6215 * temp - 35.75 * x + 0.4275 * temp * x;

wchill = Math.round(y);
document.getElementById("chill").innerHTML = wchill;