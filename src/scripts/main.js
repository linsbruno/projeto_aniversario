AOS.init();

const dataDoEvento = new Date("Nov 18,2023 20:00:00");
const timeStampDoEvento =dataDoEvento.getTime();

const contaAsHoras = setInterval (function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;
    const segundoEmMS = 1000;

    const diasAteoEvento = Math.floor(distanciaAteoEvento/ diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteoEvento % diaEmMs) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteoEvento % horaEmMS) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteoEvento % minutoEmMS) / segundoEmMS);



    document.getElementById('contador').innerHTML = `Faltam ${diasAteoEvento} dias , ${horasAteOevento} horas , ${minutosAteOEvento} minutos e ${segundosAteOEvento} segundos até o evento` ;
},1000);