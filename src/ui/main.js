/// <reference types="jquery"/>

import { iniciar } from "/src/api/api.js"
import { cambiarFormacion } from "/src/servicio/formaciones.js"

export function reiniciarGranDt(){
    document.querySelector("#boton-reinicio").addEventListener("click",() =>{
        location.reload();
    })
};

iniciar();
cambiarFormacion();
