const boton = document.getElementById("btnLuz");
const rojo = document.getElementById("luzrojo");
const amarillo = document.getElementById("luzamarillo");
const verde = document.getElementById("luzverde");

let luz = 0;
let intervalo = null;
let intervaloTiempo = null;
let tiempo = 0;

function cambiarLuz(){
    rojo.className = "luzrojo apagada";
    amarillo.className = "luzamarillo apagada";
    verde.className = "luzverde apagada";
    rojo.textContent = "";
    amarillo.textContent = "";
    verde.textContent = "";

    tiempo = 0;

    if(luz == 0){
        rojo.className = "luzrojo encendidarojo";
        luz = 1;
    }
    else if(luz == 1){
        amarillo.className = "luzamarillo encendidaamarillo";
        luz = 2;
    }
    else{
        verde.className = "luzverde encendidaverde";
        luz = 0;
    }
    intervalo = setTimeout(cambiarLuz, 30000);
}

function contarTiempo(){
    tiempo++;
    if(luz == 1){
        rojo.textContent = tiempo;
    }
    else if(luz == 2){
        amarillo.textContent = tiempo;
    }
    else{
        verde.textContent = tiempo;
    }
    intervaloTiempo = setTimeout(contarTiempo, 1000);
}

boton.addEventListener("click", function(){
    if(intervalo == null){
        cambiarLuz();
        contarTiempo();
        boton.textContent = "Apagar semaforo";
    }
    else{
        clearTimeout(intervalo);
        clearTimeout(intervaloTiempo);
        intervalo = null;
        intervaloTiempo = null;
        rojo.className = "luzrojo apagada";
        amarillo.className = "luzamarillo apagada";
        verde.className = "luzverde apagada";
        rojo.textContent = "";
        amarillo.textContent = "";
        verde.textContent = "";

        luz = 0;
        tiempo = 0;
        boton.textContent = "Comenzar el semaforo";
    }
});