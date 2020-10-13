/// <reference types="jquery"/>

import { cargarJugadores } from "../api/api.js";
import { cambiarFormacion } from "../servicio/formaciones.js";
import { mostrarListaJugadores, eliminarFormaciones, $formaciones } from "../servicio/jugadores.js";

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
eliminarFormaciones($formaciones);
