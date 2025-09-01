const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")

let number = 0
let cron
const contagem = document.querySelector(".timer")

function starter() {

    number++;

    let horas = Math.floor( number / 3600)
    let minutos = Math.floor((number % 3600) / 60);
    let segundos = number % 60;

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    contagem.textContent = `${horas}:${minutos}:${segundos}`;
}

function abacate(){
    if(!cron){
        cron = setInterval(starter, 1000);
    }
}

function stop(){
    clearInterval(cron)
    cron = null;
}

function resetCronometer(){
    stop()
    number = 0
    contagem.textContent = "00:00:00";
}

start.addEventListener("click", abacate)
pause.addEventListener("click", stop)
reset.addEventListener("click", resetCronometer)