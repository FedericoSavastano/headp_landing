const head1 = document.getElementById("headp1");
const head2 = document.getElementById("headp2");
const head3 = document.getElementById("headp3");

const h1orange = document.getElementById("h1colorange");
const h1green = document.getElementById("h1colgreen");
const h1blue = document.getElementById("h1colblue");

h1orange.addEventListener("click", function () {
  head1.style.filter = "hue-rotate(0deg)";
});

h1blue.addEventListener("click", function () {
  head1.style.filter = "hue-rotate(210deg)";
});

h1green.addEventListener("click", function () {
  head1.style.filter = "hue-rotate(410deg)";
});

const h2pink = document.getElementById("h2colpink");
const h2lb = document.getElementById("h2colligb");
const h2green = document.getElementById("h2colgreen");

h2pink.addEventListener("click", function () {
  head2.style.filter = "hue-rotate(0deg)";
});

h2lb.addEventListener("click", function () {
  head2.style.filter = "hue-rotate(220deg)";
});

h2green.addEventListener("click", function () {
  head2.style.filter = "hue-rotate(190deg)";
});

const h3green = document.getElementById("h3colgreen");
const h3red = document.getElementById("h3colred");
const h3brown = document.getElementById("h3colbrown");

h3green.addEventListener("click", function () {
  head3.style.filter = "hue-rotate(90deg)";
});
h3red.addEventListener("click", function () {
  head3.style.filter = "hue-rotate(0deg)";
});

h3brown.addEventListener("click", function () {
  head3.style.filter = "hue-rotate(50deg)";
});
