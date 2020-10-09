const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };

let d = new Date ();
let year = d.getFullYear();
document.getElementById("copywriteYear").textContent = year;

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;