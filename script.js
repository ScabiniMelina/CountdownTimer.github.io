// Convierte un string a fecha en milisegundos, el mes tiene qe estar en ingles y solo los 3 primeros caracteres 
const countdownDate = new Date("Mar 1 2021 00:00:00 GMT-0300");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function Countdown() {

  // Obtiene la fecha actual en milisegundos
  const currentDate = new Date();

  //Obtengo la distancia entre la fecha actual y la cuenta regresiva en milisegundos 
  const secondsDistance = (currentDate - countdownDate) / 1000;

  //calculo el tiempo que le corresponde a los dias, meses y años
  let seconds = ('0' + Math.floor(secondsDistance % 60)).slice(-2);
  let mins = ('0' + Math.floor(secondsDistance / 60 % 60)).slice(-2);
  let hours =('0' + Math.floor(secondsDistance / 3600 % 24)).slice(-2); //Hay 3600 segundos en una hora así que lo divido por la distancia de la cuenta regresiva en segundos y calculo el resto de dividir por 24
  let days = ('0' + Math.floor(secondsDistance / (3600 * 24))).slice(-2);

  writeTime(days, hours, mins, seconds);
}

//Escribe la cuenta regresiva en la página
function writeTime(days, hours, mins, seconds){
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

//Cada 1 segundo  ejecuta la función
setInterval(Countdown, 1000);

