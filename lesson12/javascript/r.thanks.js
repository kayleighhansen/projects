/* Example URL *

https://pardonmygiraffee.github.io/wdd230/lesson12/thanks.html +

?reservation-date=2020-12-01
&period=1
&rental-type=Honda+Dia+Scooter
&number=1&
fullname=Kayleigh+Hansen
&email=kayleigh%40hansens.org
&phone=5713618641
&cruise-line=Carnival
&license=Suspended+US+License
&info-box=hi
&info-box=  */

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const date = urlParams.get('reservation-date')
console.log(date);
document.getElementById('thanks-date').innerText = date;
// shirt

const period = urlParams.get('period')
console.log(period);
document.getElementById('thanks-period').innerText = period;
// blue

const type = urlParams.get('rental-type')
console.log(type);

const number = urlParams.get('number')
console.log(number);