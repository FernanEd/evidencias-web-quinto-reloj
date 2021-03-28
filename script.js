const $reloj = document.querySelector("#reloj");
const displayReloj = () => {
  let time = new Date();
  let [seconds, minutes, hours] = [
    time.getSeconds(),
    time.getMinutes(),
    time.getHours(),
  ];

  let isPM = hours > 12;

  $reloj.innerText = `${seconds}:${minutes}:${
    isPM ? `${hours - 12} PM` : `${hours} AM`
  }`;
};
displayReloj();
setInterval(displayReloj, 1000);

////////////////////////////////////////

const $cronometro = document.querySelector("#cronometro");
const $displayCronometro = $cronometro.querySelector("#display");
let cronometer = 0;

const $correrBTN = document.querySelector("#correr");
const $pararBTN = document.querySelector("#parar");
const $reiniciarBTN = document.querySelector("#reiniciar");
let running = false;

const runCronometer = () => {
  if (running) {
    cronometer++;
    $displayCronometro.innerText = cronometer / 10;
  }
};

setInterval(runCronometer, 100);

$correrBTN.addEventListener("click", () => {
  running = true;
});

$pararBTN.addEventListener("click", () => {
  running = false;
});

$reiniciarBTN.addEventListener("click", () => {
  $displayCronometro.innerText = 0;
  cronometer = 0;
});

////////////////////////////////////////

const $relojTAB = document.querySelector("nav").querySelector("#reloj-tab");
const $cronometroTAB = document
  .querySelector("nav")
  .querySelector("#cronometro-tab");

$relojTAB.addEventListener("click", () => {
  $reloj.style.display = "block";
  $cronometro.style.display = "none";

  $relojTAB.setAttribute("class", "selected");
  $cronometroTAB.setAttribute("class", "");
});

$cronometroTAB.addEventListener("click", () => {
  $reloj.style.display = "none";
  $cronometro.style.display = "block";

  $relojTAB.setAttribute("class", "");
  $cronometroTAB.setAttribute("class", "selected");
});

$relojTAB.click();
