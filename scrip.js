let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
sun.addEventListener("click", function () {
  sun.style.display = "none";
  moon.style.display = "inline";
});
moon.addEventListener("click", function () {
  moon.style.display = "none";
  sun.style.display = "inline";
});

let section2 = document.getElementsByClassName("section2");

sun.addEventListener("click", function () {
  section2.style.display = "none";
  section2.style.display = "inline";
});

moon.addEventListener("click", function () {
  section2.style.display = "none";
  section2.style.display = "inline";
});
