import { crearJugadores, agregarSilueta, agregarJugadorEnLaCancha, crearListaTitularSuplente, $formaciones } from "./jugadores.js"

const $cancha = document.createElement("img");
const $arquero = document.createElement("img");
const $jugador1 = document.createElement("img");
const $jugador2 = document.createElement("img");
const $jugador3 = document.createElement("img");
const $jugador4 = document.createElement("img");
const $jugador5 = document.createElement("img");
const $jugador6 = document.createElement("img");
const $jugador7 = document.createElement("img");
const $jugador8 = document.createElement("img");
const $jugador9 = document.createElement("img");
const $jugador10 = document.createElement("img");
const jugadores = [$jugador1, $jugador2, $jugador3, $jugador4, $jugador5, $jugador6, $jugador7, $jugador8, $jugador9, $jugador10];
export const $contenedorCancha = document.getElementById("contenedor-cancha");

export function cambiarFormacion(){
    document.getElementById("selector-formaciones").addEventListener("change",
      ()=>{ 
          document.querySelectorAll(".boton-eliminar-deshabilitado").forEach((boton)=>boton.className="boton-eliminar");
          crearListaTitularSuplente($formaciones.value);
          const $jugadoresSeleccionados = document.querySelectorAll("#jugadores-seleccionados");
          $jugadoresSeleccionados.forEach((seleccionados)=>{
              seleccionados.className = "list-group-item list-group-item-action";
              seleccionados.setAttribute("id", "jugadores");
            });
            
          const $jugadores = document.querySelectorAll("#jugadores");
          $jugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action";
          });

          const $presupuesto = document.getElementById("cantidad-presupuesto");
          const $textoPresupuesto = document.getElementById("texto-presupuesto");

          if($presupuesto.innerText === "Te pasaste del presupuesto, empieza de nuevo!" ){
              const $presupuesto = document.getElementById("error");
              $presupuesto.setAttribute("id", "presupuesto");
              const $botonReinicio = document.querySelector("#boton-reinicio");
              $botonReinicio.remove();
            };
          $contenedorCancha.innerHTML = "";
          $presupuesto.innerHTML = 80000000;
          $textoPresupuesto.innerHTML = "Presupuesto";
  
          $cancha.setAttribute("src", "./img/cancha.jpg");
          $cancha.className = "rounded mx-auto d-block";
          $cancha.setAttribute("alt", "cancha");
          $cancha.setAttribute("id", "imagen-cancha");
  
          agregarSilueta($arquero);
          $arquero.setAttribute("id", "arq");
  
          crearJugadores(jugadores);
  
          $contenedorCancha.appendChild($cancha);
          $contenedorCancha.appendChild($arquero);
          agregarJugadorEnLaCancha(jugadores);
        });
};

export function saberPosicion(formacion, jugador){
    if(formacion === "4-3-3"){
        if(jugador === $jugador1){
            return "formacion1-del-centro";
        }
        else if(jugador === $jugador2){
            return "formacion1-del-derecho";
        }
        else if (jugador === $jugador3){
            return "formacion1-del-izquierdo";
        }
        else if(jugador === $jugador4){
            return "formacion1-med-centro";
        }
        else if (jugador === $jugador5){
            return "formacion1-med-derecho";
        }
        else if (jugador === $jugador6){
            return "formacion1-med-izquierdo";
        }
        else if (jugador === $jugador7){
            return "formacion1-def-derecho";
        }
        else if (jugador === $jugador8){
            return "formacion1-def-izquierdo";
        }
        else if (jugador === $jugador9){
            return "formacion1-def-central-derecho";
        }
        else if (jugador === $jugador10){
            return "formacion1-def-central-izquierdo";
        }
    }
    else if(formacion === "4-4-2"){
        if(jugador === $jugador1){
            return "formacion2-del-centro-derecho";
        }
        else if(jugador === $jugador2){
            return "formacion2-del-centro-izquierdo";
        }
        else if (jugador === $jugador3){
            return "formacion2-med-centro-derecho";
        }
        else if(jugador === $jugador4){
            return "formacion2-med-centro-izquierdo";
        }
        else if (jugador === $jugador5){
            return "formacion2-med-derecho";
        }
        else if (jugador === $jugador6){
            return "formacion2-med-izquierdo";
        }
        else if (jugador === $jugador7){
            return "formacion2-def-derecho";
        }
        else if (jugador === $jugador8){
            return "formacion2-def-izquierdo";
        }
        else if (jugador === $jugador9){
            return "formacion2-def-central-derecho";
        }
        else if (jugador === $jugador10){
            return "formacion2-def-central-izquierdo";
        }
    }
    else if(formacion === "4-5-1"){
        if(jugador === $jugador1){
            return "formacion3-del-centro";
        }
        else if(jugador === $jugador2){
            return "formacion3-med-centro";
        }
        else if (jugador === $jugador3){
            return "formacion3-med-lateral-derecho";
        }
        else if(jugador === $jugador4){
            return "formacion3-med-lateral-izquierdo";
        }
        else if (jugador === $jugador5){
            return "formacion3-med-derecho";
        }
        else if (jugador === $jugador6){
            return "formacion3-med-izquierdo";
        }
        else if (jugador === $jugador7){
            return "formacion3-def-derecho";
        }
        else if (jugador === $jugador8){
            return "formacion3-def-izquierdo";
        }
        else if (jugador === $jugador9){
            return "formacion3-def-central-derecho";
        }
        else if (jugador === $jugador10){
            return "formacion3-def-central-izquierdo";
        }
    }
    else if( formacion === "5-4-1"){
        if(jugador === $jugador1){
            return "formacion4-del-centro";
        }
        else if(jugador === $jugador2){
            return "formacion4-med-centro-derecho";
        }
        else if (jugador === $jugador3){
            return "formacion4-med-centro-izquierdo";
        }
        else if(jugador === $jugador4){
            return "formacion4-med-derecho";
        }
        else if (jugador === $jugador5){
            return "formacion4-med-izquierdo";
        }
        else if (jugador === $jugador6){
            return "formacion4-def-derecho";
        }
        else if (jugador === $jugador7){
            return "formacion4-def-izquierdo";
        }
        else if (jugador === $jugador8){
            return "formacion4-def-central-derecho";
        }
        else if (jugador === $jugador9){
            return "formacion4-def-central-izquierdo";
        }
        else if (jugador === $jugador10){
            return "formacion4-def-central-medio";
        }
    }
    else if(formacion === "3-5-2"){
        if(jugador === $jugador1){
            return "formacion5-del-centro-derecho";
        }
        else if(jugador === $jugador2){
            return "formacion5-del-centro-izquierdo";
        }
        else if (jugador === $jugador3){
            return "formacion5-med-centro";
        }
        else if(jugador === $jugador4){
            return "formacion5-med-lateral-derecho";
        }
        else if (jugador === $jugador5){
            return "formacion5-med-lateral-izquierdo";
        }
        else if (jugador === $jugador6){
            return "formacion5-med-derecho";
        }
        else if (jugador === $jugador7){
            return "formacion5-med-izquierdo";
        }
        else if (jugador === $jugador8){
            return "formacion5-def-derecho";
        }
        else if (jugador === $jugador9){
            return "formacion5-def-izquierdo";
        }
        else if (jugador === $jugador10){
            return "formacion5-def-central";
      }
  }
};        


