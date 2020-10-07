/// <reference types="jquery"/>

import { cargarJugadores } from "/src/api/api.js";
import { cambiarFormacion } from "/src/servicio/formaciones.js";
import { mostrarListaJugadores } from "/src/servicio/jugadores.js";

export function reiniciarGranDt(){
    document.querySelector("#boton-reinicio").addEventListener("click",() =>{
        location.reload();
    })
};

function iniciar(){
    cargarJugadores()
    .then(r => {
        const {count: totalJugadores, results: jugadores} = r;
        mostrarListaJugadores(jugadores);
    });
};

iniciar();
cambiarFormacion();
