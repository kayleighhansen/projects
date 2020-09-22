let d = new Date ();
let year = d.getFullYear();
document.getElementById("copywriteYear").textContent = year;

let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;