const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 800) mainnav.classList.remove('responsive') };


let d = new Date ();
let year = d.getFullYear();
document.getElementById("copywriteYear").textContent = year;


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("currentDate").textContent = today;