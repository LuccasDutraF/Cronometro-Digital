const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const reset = document.querySelector(".reset")
const aumentarVelo1000ms = document.querySelector(".aumentarvelocidade1000ms")
const aumentarVelo100ms = document.querySelector(".aumentarvelocidade100ms")
const aumentarVelo1ms = document.querySelector(".aumentarvelocidade1ms")

let number = 0
let cron;
const contagem = document.querySelector(".main-time");
const milissegundosspan = document.querySelector(".milliseconds")
let currentInterval = 1000;

function SetIntervalConfigs() {

    number++;

    let horas = Math.floor(number / 360000);
    let minutos = Math.floor((number % 360000) / 6000);
    let segundos = Math.floor((number % 6000) / 100);
    let milissegundos = Math.floor(number % 100);

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    milissegundos = String(milissegundos).padStart(2, '0');
    

    contagem.textContent = `${horas}:${minutos}:${segundos}`;
    milissegundosspan.textContent = milissegundos
}

function StarterCronometer(){
    if(!cron){
        cron = setInterval(SetIntervalConfigs, currentInterval);
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
    milissegundosspan.textContent = "00";
    currentInterval = 1000;
}

function AumentarVelocidade(velocidade){
    if(cron){
        stop();
    }

    currentInterval = velocidade;
    StarterCronometer();
}


aumentarVelo1000ms.addEventListener("click", (velocidade) => AumentarVelocidade(500));
aumentarVelo100ms.addEventListener("click", (velocidade) => AumentarVelocidade(50));
aumentarVelo1ms.addEventListener("click", (velocidade) => AumentarVelocidade(10.50));
start.addEventListener("click", StarterCronometer);
pause.addEventListener("click", stop);
reset.addEventListener("click", resetCronometer);