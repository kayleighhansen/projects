speed = 40;
temp = 30;

x = Math.pow(speed, 0.16);
y = 35.74 + 0.6215 * temp - 35.75 * x + 0.4275 * temp * x;

wchill = Math.round(y);

document.getElementById("chill").innerHTML = wchill;