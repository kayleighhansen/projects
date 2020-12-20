const menubutton = document.querySelector('.astericks-menu');
const mainnav = document.querySelector('.navigation')
menubutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
window.onresize = () => { if (window.innerWidth > 800) mainnav.classList.remove('responsive') };


//Footer Last Modified

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;