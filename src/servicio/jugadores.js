import { reiniciarGranDt } from "../ui/main.js"
import { saberPosicion, $contenedorCancha } from "./formaciones.js"

const $presupuesto = document.getElementById("cantidad-presupuesto");
export const $formaciones = document.getElementById("selector-formaciones");
const $listaTitular1 = document.getElementById("texto-titular1");
const $listaTitular2 = document.getElementById("texto-titular2");
const $listaTitular3 = document.getElementById("texto-titular3");
const $listaTitular4 = document.getElementById("texto-titular4");
const $listaTitular5 = document.getElementById("texto-titular5");
const $listaTitular6 = document.getElementById("texto-titular6");
const $listaTitular7 = document.getElementById("texto-titular7");
const $listaTitular8 = document.getElementById("texto-titular8");
const $listaTitular9 = document.getElementById("texto-titular9");
const $listaTitular10 = document.getElementById("texto-titular10");
const $listaTitular11 = document.getElementById("texto-titular11");
const $listaSuplente1 = document.getElementById("texto-suplente1");
const $listaSuplente2 = document.getElementById("texto-suplente2");
const $listaSuplente3 = document.getElementById("texto-suplente3");
const $listaSuplente4 = document.getElementById("texto-suplente4");
const $listaSuplente5 = document.getElementById("texto-suplente5");
const listaTitularesSuplentes = [
    $listaTitular1, $listaTitular2, $listaTitular3, $listaTitular4,
    $listaTitular5, $listaTitular6, $listaTitular7, $listaTitular8,
    $listaTitular9, $listaTitular10, $listaTitular11, $listaSuplente1,
    $listaSuplente2, $listaSuplente3, $listaSuplente4, $listaSuplente5
];
const $botonEliminar1 = document.getElementById("boton-eliminar1");
const $botonEliminar2 = document.getElementById("boton-eliminar2");
const $botonEliminar3 = document.getElementById("boton-eliminar3");
const $botonEliminar4 = document.getElementById("boton-eliminar4");
const $botonEliminar5 = document.getElementById("boton-eliminar5");
const $botonEliminar6 = document.getElementById("boton-eliminar6");
const $botonEliminar7 = document.getElementById("boton-eliminar7");
const $botonEliminar8 = document.getElementById("boton-eliminar8");
const $botonEliminar9 = document.getElementById("boton-eliminar9");
const $botonEliminar10 = document.getElementById("boton-eliminar10");
const $botonEliminar11 = document.getElementById("boton-eliminar11");
const $botonEliminar12 = document.getElementById("boton-eliminar12");
const $botonEliminar13 = document.getElementById("boton-eliminar13");
const $botonEliminar14 = document.getElementById("boton-eliminar14");
const $botonEliminar15 = document.getElementById("boton-eliminar15");
const $botonEliminar16 = document.getElementById("boton-eliminar16");

export function mostrarListaJugadores(jugadores){
    const $listaJugadores = document.querySelector("#lista-jugadores");
    jugadores.forEach((jugador)=>{
        const {nombre: nombre, imagen: imagen, posicion: posicion, precio: precio, equipo: equipo} = jugador;
        const $link = document.createElement("li");
        $link.className = "list-group-item list-group-item-action";
        $link.setAttribute("id", "jugadores");
        $link.setAttribute("nombre", nombre);
        $link.setAttribute("precio", precio);
        $link.style = `background-image: url(${imagen})`;
        $link.textContent = `${nombre} $${precio} ${posicion}`;
        $link.addEventListener("click", ()=>{
            $link.className = "list-group-item list-group-item-action disabled";
            $link.setAttribute("id", "jugadores-seleccionados");
            if($formaciones.value === "4-3-3"){
                seleccionarJugadorFormacion1(imagen, posicion, precio, nombre);
            }
            else if($formaciones.value === "4-4-2"){
                seleccionarJugadorFormacion2(imagen, posicion, precio, nombre);
            }
            else if ($formaciones.value === "4-5-1"){
                seleccionarJugadorFormacion3(imagen, posicion, precio, nombre);
            }
            else if ($formaciones.value === "5-4-1"){
                seleccionarJugadorFormacion4(imagen, posicion, precio, nombre);
            }
            else if ($formaciones.value === "3-5-2"){
                seleccionarJugadorFormacion5(imagen, posicion, precio, nombre);
            }
        });
        $listaJugadores.appendChild($link);
    });
};

function seleccionarJugadorFormacion1(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion1-del-centro").className === "silueta"){
        document.getElementById("formacion1-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion1-del-centro").setAttribute("class", nombre);
        $listaTitular1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-derecho").className === "silueta"){
        document.getElementById("formacion1-del-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-del-derecho").setAttribute("class", nombre);
        $listaTitular2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-izquierdo").className === "silueta"){
        document.getElementById("formacion1-del-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-del-izquierdo").setAttribute("class", nombre);
        $listaTitular3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion1-med-centro").className === "silueta"){
        document.getElementById("formacion1-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion1-med-centro").setAttribute("class", nombre);
        $listaTitular4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-derecho").className === "silueta"){
        document.getElementById("formacion1-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-med-derecho").setAttribute("class", nombre);
        $listaTitular5.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-izquierdo").className === "silueta"){
        document.getElementById("formacion1-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-med-izquierdo").setAttribute("class", nombre);
        $listaTitular6.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-derecho").className === "silueta"){
        document.getElementById("formacion1-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-derecho").setAttribute("class", nombre);
        $listaTitular7.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-izquierdo").setAttribute("class", nombre);
        $listaTitular8.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-derecho").className === "silueta"){
        document.getElementById("formacion1-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-derecho").setAttribute("class", nombre);
        $listaTitular9.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("class", nombre);
        $listaTitular10.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        $listaTitular11.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente1.innerText === ""){
        $listaSuplente1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente2.innerText === ""){
        $listaSuplente2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente3.innerText === ""){
        $listaSuplente3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente4.innerText === ""){
        $listaSuplente4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente5.innerText === ""){
        $listaSuplente5.innerText = nombre;
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
        });
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!";
        document.querySelectorAll(".boton-eliminar").forEach((boton)=>boton.className="boton-eliminar-deshabilitado");
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
            jugador.setAttribute("id", "jugadores-seleccionados");
        });
    };
};

function seleccionarJugadorFormacion2(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion2-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-derecho").setAttribute("class", nombre);
        $listaTitular1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion2-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("class", nombre);
        $listaTitular2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-derecho").setAttribute("class", nombre);
        $listaTitular3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("class", nombre);
        $listaTitular4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-derecho").className === "silueta"){
        document.getElementById("formacion2-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-derecho").setAttribute("class", nombre);
        $listaTitular5.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-izquierdo").setAttribute("class", nombre);
        $listaTitular6.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-derecho").className === "silueta"){
        document.getElementById("formacion2-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-derecho").setAttribute("class", nombre);
        $listaTitular7.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-izquierdo").setAttribute("class", nombre);
        $listaTitular8.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-derecho").className === "silueta"){
        document.getElementById("formacion2-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-derecho").setAttribute("class", nombre);
        $listaTitular9.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("class", nombre);
        $listaTitular10.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        $listaTitular11.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente1.innerText === ""){
        $listaSuplente1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente2.innerText === ""){
        $listaSuplente2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente3.innerText === ""){
        $listaSuplente3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente4.innerText === ""){
        $listaSuplente4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente5.innerText === ""){
        $listaSuplente5.innerText = nombre;
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
        });
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!";
        document.querySelectorAll(".boton-eliminar").forEach((boton)=>boton.className="boton-eliminar-deshabilitado");
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
            jugador.setAttribute("id", "jugadores-seleccionados");
        });
    };
};

function seleccionarJugadorFormacion3(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion3-del-centro").className === "silueta"){
        document.getElementById("formacion3-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-del-centro").setAttribute("class", nombre);
        $listaTitular1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-centro").className === "silueta"){
        document.getElementById("formacion3-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-med-centro").setAttribute("class", nombre);
        $listaTitular2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("class", nombre);
        $listaTitular3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("class", nombre);
        $listaTitular4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-derecho").className === "silueta"){
        document.getElementById("formacion3-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-derecho").setAttribute("class", nombre);
        $listaTitular5.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-izquierdo").setAttribute("class", nombre);
        $listaTitular6.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-derecho").className === "silueta"){
        document.getElementById("formacion3-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-derecho").setAttribute("class", nombre);
        $listaTitular7.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-izquierdo").setAttribute("class", nombre);
        $listaTitular8.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-derecho").className === "silueta"){
        document.getElementById("formacion3-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-derecho").setAttribute("class", nombre);
        $listaTitular9.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("class", nombre);
        $listaTitular10.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        $listaTitular11.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente1.innerText === ""){
        $listaSuplente1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente2.innerText === ""){
        $listaSuplente2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente3.innerText === ""){
        $listaSuplente3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente4.innerText === ""){
        $listaSuplente4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente5.innerText === ""){
        $listaSuplente5.innerText = nombre;
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
        });
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!";
        document.querySelectorAll(".boton-eliminar").forEach((boton)=>boton.className="boton-eliminar-deshabilitado");
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
            jugador.setAttribute("id", "jugadores-seleccionados");
        });
    };
};

function seleccionarJugadorFormacion4(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion4-del-centro").className === "silueta"){
        document.getElementById("formacion4-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion4-del-centro").setAttribute("class", nombre);
        $listaTitular1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion4-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-derecho").setAttribute("class", nombre);
        $listaTitular2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("class", nombre);
        $listaTitular3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-derecho").className === "silueta"){
        document.getElementById("formacion4-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-derecho").setAttribute("class", nombre);
        $listaTitular4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion4-med-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-izquierdo").setAttribute("class", nombre);
        $listaTitular5.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-derecho").className === "silueta"){
        document.getElementById("formacion4-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-derecho").setAttribute("class", nombre);
        $listaTitular6.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-izquierdo").setAttribute("class", nombre);
        $listaTitular7.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-derecho").className === "silueta"){
        document.getElementById("formacion4-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-derecho").setAttribute("class", nombre);
        $listaTitular8.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("class", nombre);
        $listaTitular9.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-medio").className === "silueta"){
        document.getElementById("formacion4-def-central-medio").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-medio").setAttribute("class", nombre);
        $listaTitular10.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        $listaTitular11.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente1.innerText === ""){
        $listaSuplente1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente2.innerText === ""){
        $listaSuplente2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente3.innerText === ""){
        $listaSuplente3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente4.innerText === ""){
        $listaSuplente4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente5.innerText === ""){
        $listaSuplente5.innerText = nombre;
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
        });
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!";
        document.querySelectorAll(".boton-eliminar").forEach((boton)=>boton.className="boton-eliminar-deshabilitado");
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
            jugador.setAttribute("id", "jugadores-seleccionados");
        });
    };
};

function seleccionarJugadorFormacion5(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion5-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion5-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-derecho").setAttribute("class", nombre);
        $listaTitular1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion5-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("class", nombre);
        $listaTitular2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-centro").className === "silueta"){
        document.getElementById("formacion5-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion5-med-centro").setAttribute("class", nombre);
        $listaTitular3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("class", nombre);
        $listaTitular4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("class", nombre);
        $listaTitular5.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-derecho").className === "silueta"){
        document.getElementById("formacion5-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-derecho").setAttribute("class", nombre);
        $listaTitular6.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-izquierdo").setAttribute("class", nombre);
        $listaTitular7.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-derecho").className === "silueta"){
        document.getElementById("formacion5-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-def-derecho").setAttribute("class", nombre);
        $listaTitular8.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-izquierdo").className === "silueta"){
        document.getElementById("formacion5-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-def-izquierdo").setAttribute("class", nombre);
        $listaTitular9.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-central").className === "silueta"){
        document.getElementById("formacion5-def-central").setAttribute("src", imagen);
        document.getElementById("formacion5-def-central").setAttribute("class", nombre);
        $listaTitular10.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        $listaTitular11.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente1.innerText === ""){
        $listaSuplente1.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente2.innerText === ""){
        $listaSuplente2.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente3.innerText === ""){
        $listaSuplente3.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente4.innerText === ""){
        $listaSuplente4.innerText = nombre;
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }else if($listaSuplente5.innerText === ""){
        $listaSuplente5.innerText = nombre;
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
        });
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!";
        document.querySelectorAll(".boton-eliminar").forEach((boton)=>boton.className="boton-eliminar-deshabilitado");
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
        const $totalListaJugadores = document.querySelectorAll("#jugadores");
        $totalListaJugadores.forEach((jugador)=>{
            jugador.className = "list-group-item list-group-item-action disabled";
            jugador.setAttribute("id", "jugadores-seleccionados");
        });
    };
};

export function crearJugadores(jugadores){

    jugadores.forEach((jugador)=>{
        agregarSilueta(jugador);
        jugador.setAttribute("id", `${saberPosicion($formaciones.value, jugador)}`);
    })
};

export function agregarSilueta(jugador){
    jugador.setAttribute("src", "./img/silueta.png");
    jugador.className = "silueta";
    jugador.setAttribute("alt", "jugador");
};

export function agregarJugadorEnLaCancha(jugadores){

    jugadores.forEach((jugador)=>{
        $contenedorCancha.appendChild(jugador);
    })
};

export function crearListaTitularSuplente(formacion){
    const $medallaTitular1 = document.getElementsByClassName("badge titular1");
    const $medallaTitular2 = document.getElementsByClassName("badge titular2");
    const $medallaTitular3 = document.getElementsByClassName("badge titular3");
    const $medallaTitular4 = document.getElementsByClassName("badge titular4");
    const $medallaTitular5 = document.getElementsByClassName("badge titular5");
    const $medallaTitular6 = document.getElementsByClassName("badge titular6");
    const $medallaTitular7 = document.getElementsByClassName("badge titular7");
    const $medallaTitular8 = document.getElementsByClassName("badge titular8");
    const $medallaTitular9 = document.getElementsByClassName("badge titular9");
    const $medallaTitular10 = document.getElementsByClassName("badge titular10");
    const $medallaTitular11 = document.getElementsByClassName("badge titular11");
    if(formacion === "4-3-3"){
        removerTexto(listaTitularesSuplentes)
        $medallaTitular1[0].setAttribute("id","badge-del");
        $medallaTitular1[0].innerText = "DEL";
        $medallaTitular2[0].setAttribute("id","badge-del");
        $medallaTitular2[0].innerText = "DEL";
        $medallaTitular3[0].setAttribute("id","badge-del");
        $medallaTitular3[0].innerText = "DEL";
        $medallaTitular4[0].setAttribute("id","badge-med");
        $medallaTitular4[0].innerText = "MED";
        $medallaTitular5[0].setAttribute("id","badge-med");
        $medallaTitular5[0].innerText = "MED";
        $medallaTitular6[0].setAttribute("id","badge-med");
        $medallaTitular6[0].innerText = "MED";
        $medallaTitular7[0].setAttribute("id","badge-def");
        $medallaTitular7[0].innerText = "DEF";
        $medallaTitular8[0].setAttribute("id","badge-def");
        $medallaTitular8[0].innerText = "DEF";
        $medallaTitular9[0].setAttribute("id","badge-def");
        $medallaTitular9[0].innerText = "DEF";
        $medallaTitular10[0].setAttribute("id","badge-def");
        $medallaTitular10[0].innerText = "DEF";
        $medallaTitular11[0].setAttribute("id","badge-arq");
        $medallaTitular11[0].innerText = "ARQ";
 
    }else if(formacion === "4-4-2"){
        removerTexto(listaTitularesSuplentes)
        $medallaTitular1[0].setAttribute("id","badge-del");
        $medallaTitular1[0].innerText = "DEL";
        $medallaTitular2[0].setAttribute("id","badge-del");
        $medallaTitular2[0].innerText = "DEL";
        $medallaTitular3[0].setAttribute("id","badge-med");
        $medallaTitular3[0].innerText = "MED";
        $medallaTitular4[0].setAttribute("id","badge-med");
        $medallaTitular4[0].innerText = "MED";
        $medallaTitular5[0].setAttribute("id","badge-med");
        $medallaTitular5[0].innerText = "MED";
        $medallaTitular6[0].setAttribute("id","badge-med");
        $medallaTitular6[0].innerText = "MED";
        $medallaTitular7[0].setAttribute("id","badge-def");
        $medallaTitular7[0].innerText = "DEF";
        $medallaTitular8[0].setAttribute("id","badge-def");
        $medallaTitular8[0].innerText = "DEF";
        $medallaTitular9[0].setAttribute("id","badge-def");
        $medallaTitular9[0].innerText = "DEF";
        $medallaTitular10[0].setAttribute("id","badge-def");
        $medallaTitular10[0].innerText = "DEF";
        $medallaTitular11[0].setAttribute("id","badge-arq");
        $medallaTitular11[0].innerText = "ARQ";
        
    }else if(formacion === "4-5-1"){
        removerTexto(listaTitularesSuplentes)
        $medallaTitular1[0].setAttribute("id","badge-del");
        $medallaTitular1[0].innerText = "DEL";
        $medallaTitular2[0].setAttribute("id","badge-med");
        $medallaTitular2[0].innerText = "MED";
        $medallaTitular3[0].setAttribute("id","badge-med");
        $medallaTitular3[0].innerText = "MED";
        $medallaTitular4[0].setAttribute("id","badge-med");
        $medallaTitular4[0].innerText = "MED";
        $medallaTitular5[0].setAttribute("id","badge-med");
        $medallaTitular5[0].innerText = "MED";
        $medallaTitular6[0].setAttribute("id","badge-med");
        $medallaTitular6[0].innerText = "MED";
        $medallaTitular7[0].setAttribute("id","badge-def");
        $medallaTitular7[0].innerText = "DEF";
        $medallaTitular8[0].setAttribute("id","badge-def");
        $medallaTitular8[0].innerText = "DEF";
        $medallaTitular9[0].setAttribute("id","badge-def");
        $medallaTitular9[0].innerText = "DEF";
        $medallaTitular10[0].setAttribute("id","badge-def");
        $medallaTitular10[0].innerText = "DEF";
        $medallaTitular11[0].setAttribute("id","badge-arq");
        $medallaTitular11[0].innerText = "ARQ";

    }else if(formacion === "5-4-1"){
        removerTexto(listaTitularesSuplentes)
        $medallaTitular1[0].setAttribute("id","badge-del");
        $medallaTitular1[0].innerText = "DEL";
        $medallaTitular2[0].setAttribute("id","badge-med");
        $medallaTitular2[0].innerText = "MED";
        $medallaTitular3[0].setAttribute("id","badge-med");
        $medallaTitular3[0].innerText = "MED";
        $medallaTitular4[0].setAttribute("id","badge-med");
        $medallaTitular4[0].innerText = "MED";
        $medallaTitular5[0].setAttribute("id","badge-med");
        $medallaTitular5[0].innerText = "MED";
        $medallaTitular6[0].setAttribute("id","badge-def");
        $medallaTitular6[0].innerText = "DEF";
        $medallaTitular7[0].setAttribute("id","badge-def");
        $medallaTitular7[0].innerText = "DEF";
        $medallaTitular8[0].setAttribute("id","badge-def");
        $medallaTitular8[0].innerText = "DEF";
        $medallaTitular9[0].setAttribute("id","badge-def");
        $medallaTitular9[0].innerText = "DEF";
        $medallaTitular10[0].setAttribute("id","badge-def");
        $medallaTitular10[0].innerText = "DEF";
        $medallaTitular11[0].setAttribute("id","badge-arq");
        $medallaTitular11[0].innerText = "ARQ";

    }else if(formacion === "3-5-2"){
        removerTexto(listaTitularesSuplentes)
        $medallaTitular1[0].setAttribute("id","badge-del");
        $medallaTitular1[0].innerText = "DEL";
        $medallaTitular2[0].setAttribute("id","badge-del");
        $medallaTitular2[0].innerText = "DEL";
        $medallaTitular3[0].setAttribute("id","badge-med");
        $medallaTitular3[0].innerText = "MED";
        $medallaTitular4[0].setAttribute("id","badge-med");
        $medallaTitular4[0].innerText = "MED";
        $medallaTitular5[0].setAttribute("id","badge-med");
        $medallaTitular5[0].innerText = "MED";
        $medallaTitular6[0].setAttribute("id","badge-med");
        $medallaTitular6[0].innerText = "MED";
        $medallaTitular7[0].setAttribute("id","badge-med");
        $medallaTitular7[0].innerText = "MED";
        $medallaTitular8[0].setAttribute("id","badge-def");
        $medallaTitular8[0].innerText = "DEF";
        $medallaTitular9[0].setAttribute("id","badge-def");
        $medallaTitular9[0].innerText = "DEF";
        $medallaTitular10[0].setAttribute("id","badge-def");
        $medallaTitular10[0].innerText = "DEF";
        $medallaTitular11[0].setAttribute("id","badge-arq");
        $medallaTitular11[0].innerText = "ARQ";

    } 
}

function removerTexto(titulares){
    titulares.forEach((titular)=>{
        titular.innerHTML = "";
    })
}

export function eliminarFormaciones(formaciones){
        $botonEliminar1.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-del-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-del-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-del-centro").className = "silueta"
                        $listaTitular1.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-del-centro-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-del-centro-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-del-centro-derecho").className = "silueta"
                        $listaTitular1.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-del-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-del-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-del-centro").className = "silueta"
                        $listaTitular1.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-del-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-del-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-del-centro").className = "silueta"
                        $listaTitular1.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-del-centro-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-del-centro-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-del-centro-derecho").className = "silueta"
                        $listaTitular1.innerText = "";
                    };
                });
            };
        });
        $botonEliminar2.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-del-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-del-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-del-derecho").className = "silueta"
                        $listaTitular2.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-del-centro-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-del-centro-izquierdo").className = "silueta"
                        $listaTitular2.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-med-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-med-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-med-centro").className = "silueta"
                        $listaTitular2.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-med-centro-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-med-centro-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-med-centro-derecho").className = "silueta"
                        $listaTitular2.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-del-centro-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-del-centro-izquierdo").className = "silueta"
                        $listaTitular2.innerText = "";
                    };
                });
            };
        });
        $botonEliminar3.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-del-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-del-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-del-izquierdo").className = "silueta"
                        $listaTitular3.innerText = "";
                    };
                });
            }else if(formaciones.value ==="4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-med-centro-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-med-centro-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-med-centro-derecho").className = "silueta"
                        $listaTitular3.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-med-lateral-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-med-lateral-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-med-lateral-derecho").className = "silueta"
                        $listaTitular3.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-med-centro-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-med-centro-izquierdo").className = "silueta"
                        $listaTitular3.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-med-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-med-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-med-centro").className = "silueta"
                        $listaTitular3.innerText = "";
                    };
                });
            };
        });
        $botonEliminar4.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-med-centro").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-med-centro").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-med-centro").className = "silueta"
                        $listaTitular4.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-med-centro-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-med-centro-izquierdo").className = "silueta"
                        $listaTitular4.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-med-lateral-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-med-lateral-izquierdo").className = "silueta"
                        $listaTitular4.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-med-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-med-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-med-derecho").className = "silueta"
                        $listaTitular4.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-med-lateral-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-med-lateral-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-med-lateral-derecho").className = "silueta"
                        $listaTitular4.innerText = "";
                    };
                });
            };
        });
        $botonEliminar5.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-med-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-med-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-med-derecho").className = "silueta"
                        $listaTitular5.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-med-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-med-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-med-derecho").className = "silueta"
                        $listaTitular5.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-med-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-med-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-med-derecho").className = "silueta"
                        $listaTitular5.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-med-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-med-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-med-izquierdo").className = "silueta"
                        $listaTitular5.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-med-lateral-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-med-lateral-izquierdo").className = "silueta"
                        $listaTitular5.innerText = "";
                    };
                });
            };
        });
        $botonEliminar6.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-med-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-med-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-med-izquierdo").className = "silueta"
                        $listaTitular6.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-med-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-med-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-med-izquierdo").className = "silueta"
                        $listaTitular6.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-med-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-med-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-med-izquierdo").className = "silueta"
                        $listaTitular6.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-def-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-def-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-def-derecho").className = "silueta"
                        $listaTitular6.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-med-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-med-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-med-derecho").className = "silueta"
                        $listaTitular6.innerText = "";
                    };
                });
            };
        });
        $botonEliminar7.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-def-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-def-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-def-derecho").className = "silueta"
                        $listaTitular7.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-def-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-def-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-def-derecho").className = "silueta"
                        $listaTitular7.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-def-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-def-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-def-derecho").className = "silueta"
                        $listaTitular7.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-def-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-def-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-def-izquierdo").className = "silueta"
                        $listaTitular7.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-med-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-med-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-med-izquierdo").className = "silueta"
                        $listaTitular7.innerText = "";
                    };
                });
            };
        });
        $botonEliminar8.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-def-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-def-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-def-izquierdo").className = "silueta"
                        $listaTitular8.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-def-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-def-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-def-izquierdo").className = "silueta"
                        $listaTitular8.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-def-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-def-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-def-izquierdo").className = "silueta"
                        $listaTitular8.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-def-central-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-def-central-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-def-central-derecho").className = "silueta"
                        $listaTitular8.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-def-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-def-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-def-derecho").className = "silueta"
                        $listaTitular8.innerText = "";
                    };
                });
            };
        });
        $botonEliminar9.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-def-central-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-def-central-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-def-central-derecho").className = "silueta"
                        $listaTitular9.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-def-central-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-def-central-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-def-central-derecho").className = "silueta"
                        $listaTitular9.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-def-central-derecho").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-def-central-derecho").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-def-central-derecho").className = "silueta"
                        $listaTitular9.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-def-central-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-def-central-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-def-central-izquierdo").className = "silueta"
                        $listaTitular9.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-def-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-def-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-def-izquierdo").className = "silueta"
                        $listaTitular9.innerText = "";
                    };
                });
            };
        });
        $botonEliminar10.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            if(formaciones.value === "4-3-3"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion1-def-central-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion1-def-central-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion1-def-central-izquierdo").className = "silueta"
                        $listaTitular10.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-4-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion2-def-central-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion2-def-central-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion2-def-central-izquierdo").className = "silueta"
                        $listaTitular10.innerText = "";
                    };
                });
            }else if(formaciones.value === "4-5-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion3-def-central-izquierdo").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion3-def-central-izquierdo").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion3-def-central-izquierdo").className = "silueta"
                        $listaTitular10.innerText = "";
                    };
                });
            }else if(formaciones.value === "5-4-1"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion4-def-central-medio").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion4-def-central-medio").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion4-def-central-medio").className = "silueta"
                        $listaTitular10.innerText = "";
                    };
                });
            }else if(formaciones.value === "3-5-2"){
                document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                    if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("formacion5-def-central").className){
                        jugadorSeleccionado.className = "list-group-item list-group-item-action";
                        jugadorSeleccionado.setAttribute("id", "jugadores");
                        $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                        document.getElementById("formacion5-def-central").setAttribute("src", "./img/silueta.png");
                        document.getElementById("formacion5-def-central").className = "silueta"
                        $listaTitular10.innerText = "";
                    };
                });
            };
        });
        $botonEliminar11.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === document.getElementById("arq").className){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    document.getElementById("arq").setAttribute("src", "./img/silueta.png");
                    document.getElementById("arq").className = "silueta"
                    $listaTitular11.innerText = "";
                }
            });
        });
        $botonEliminar12.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === $listaSuplente1.innerText){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    $listaSuplente1.innerText = "";
                };
            });
        });
        $botonEliminar13.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === $listaSuplente2.innerText){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    $listaSuplente2.innerText = "";
                };
            });
        });
        $botonEliminar14.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === $listaSuplente3.innerText){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    $listaSuplente3.innerText = "";
                };
            });
        });
        $botonEliminar15.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === $listaSuplente4.innerText){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    $listaSuplente4.innerText = "";
                };
            });
        });
        $botonEliminar16.addEventListener("click", ()=>{
            document.querySelectorAll("#jugadores").forEach((jugador)=>jugador.className = "list-group-item list-group-item-action");
            document.querySelectorAll("#jugadores-seleccionados").forEach((jugadorSeleccionado)=>{
                if(jugadorSeleccionado.getAttribute("nombre") === $listaSuplente5.innerText){
                    jugadorSeleccionado.className = "list-group-item list-group-item-action";
                    jugadorSeleccionado.setAttribute("id", "jugadores");
                    $presupuesto.innerText = Number($presupuesto.innerText) + Number(jugadorSeleccionado.getAttribute("precio"));
                    $listaSuplente5.innerText = "";
                };
            });
        });
};
