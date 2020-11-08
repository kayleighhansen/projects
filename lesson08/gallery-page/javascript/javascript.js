
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

const images = document.querySelectorAll("[data-src]");
function preloadImg(img) { 
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
} 
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 400px 0px"
};
const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImg(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);
  images.forEach(image => {
      imgObserver.observe(image);
  });