import { reiniciarGranDt } from "/src/ui/main.js"
import { saberPosicion, $contenedorCancha } from "./formaciones.js"

const $presupuesto = document.getElementById("cantidad-presupuesto");

export function mostrarListaJugadores(jugadores){
    const $listaJugadores = document.querySelector("#lista-jugadores");
    jugadores.forEach((jugador)=>{
        const {nombre: nombre, imagen: imagen, posicion: posicion, precio: precio, equipo: equipo} = jugador;
        const $link = document.createElement("a");
        $link.className = "list-group-item list-group-item-action";
        $link.setAttribute("href", "#");
        $link.setAttribute("id", "jugadores");
        $link.style = `background-image: url(${imagen})`;
        $link.textContent = `${nombre} $${precio} ${posicion}`;
        $link.addEventListener("click", ()=>{
            $link.className = "list-group-item list-group-item-action disabled";
            $link.setAttribute("id", "jugadores-seleccionados");
            if(document.getElementById("selector-formaciones").value === "4-3-3"){
                seleccionarJugadorFormacion1(imagen, posicion, precio, nombre);
            }
            else if(document.getElementById("selector-formaciones").value === "4-4-2"){
                seleccionarJugadorFormacion2(imagen, posicion, precio, nombre);
            }
            else if (document.getElementById("selector-formaciones").value === "4-5-1"){
                seleccionarJugadorFormacion3(imagen, posicion, precio, nombre);
            }
            else if (document.getElementById("selector-formaciones").value === "5-4-1"){
                seleccionarJugadorFormacion4(imagen, posicion, precio, nombre);
            }
            else if (document.getElementById("selector-formaciones").value === "3-5-2"){
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
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-derecho").className === "silueta"){
        document.getElementById("formacion1-del-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-del-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-izquierdo").className === "silueta"){
        document.getElementById("formacion1-del-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-del-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion1-med-centro").className === "silueta"){
        document.getElementById("formacion1-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion1-med-centro").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-derecho").className === "silueta"){
        document.getElementById("formacion1-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-med-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-izquierdo").className === "silueta"){
        document.getElementById("formacion1-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-med-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-derecho").className === "silueta"){
        document.getElementById("formacion1-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-derecho").className === "silueta"){
        document.getElementById("formacion1-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!"
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
    };
};

function seleccionarJugadorFormacion2(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion2-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion2-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-derecho").className === "silueta"){
        document.getElementById("formacion2-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-derecho").className === "silueta"){
        document.getElementById("formacion2-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-derecho").className === "silueta"){
        document.getElementById("formacion2-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!"
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
    };
};

function seleccionarJugadorFormacion3(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion3-del-centro").className === "silueta"){
        document.getElementById("formacion3-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-del-centro").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-centro").className === "silueta"){
        document.getElementById("formacion3-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-med-centro").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-derecho").className === "silueta"){
        document.getElementById("formacion3-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-derecho").className === "silueta"){
        document.getElementById("formacion3-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-derecho").className === "silueta"){
        document.getElementById("formacion3-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!"
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
    };
};

function seleccionarJugadorFormacion4(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion4-del-centro").className === "silueta"){
        document.getElementById("formacion4-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion4-del-centro").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion4-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = $presupuesto.innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-derecho").className === "silueta"){
        document.getElementById("formacion4-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion4-med-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-derecho").className === "silueta"){
        document.getElementById("formacion4-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-derecho").className === "silueta"){
        document.getElementById("formacion4-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-medio").className === "silueta"){
        document.getElementById("formacion4-def-central-medio").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-medio").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    if(document.getElementById("dinero").innerText < 0){
        document.getElementById("dinero").innerHTML = "Te pasaste del presupuesto, empieza de nuevo!"
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
    };
};

function seleccionarJugadorFormacion5(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion5-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion5-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if(posicion === "DEL" && document.getElementById("formacion5-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-centro").className === "silueta"){
        document.getElementById("formacion5-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion5-med-centro").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-derecho").className === "silueta"){
        document.getElementById("formacion5-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-derecho").className === "silueta"){
        document.getElementById("formacion5-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-def-derecho").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-izquierdo").className === "silueta"){
        document.getElementById("formacion5-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-def-izquierdo").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-central").className === "silueta"){
        document.getElementById("formacion5-def-central").setAttribute("src", imagen);
        document.getElementById("formacion5-def-central").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
        if($presupuesto.innerText !== "Te pasaste del presupuesto, empieza de nuevo!"){
            $presupuesto.innerText = document.getElementById("dinero").innerText - precio;
        };
    }
    if($presupuesto.innerText < 0){
        $presupuesto.innerHTML = "Te pasaste del presupuesto, empieza de nuevo!"
        document.getElementById("presupuesto").setAttribute("id", "error");
        document.getElementById("texto-presupuesto").innerHTML = "";
        const $botonReinicio = document.createElement("button");
        $botonReinicio.setAttribute("id", "boton-reinicio");
        $botonReinicio.innerHTML = "Reinicio";
        document.querySelector("#contenedor-presupuesto").appendChild($botonReinicio);
        reiniciarGranDt();
    };
};

export function crearJugadores(jugadores){

    const $formacion = document.getElementById("selector-formaciones").value;

    jugadores.forEach((jugador)=>{
        agregarSilueta(jugador);
        jugador.setAttribute("id", `${saberPosicion($formacion, jugador)}`);
    })
};

export function agregarSilueta(jugador){
    jugador.setAttribute("src", "./img/silueta.gif");
    jugador.className = "silueta";
    jugador.setAttribute("alt", "jugador");
};

export function agregarJugadorEnLaCancha(jugadores){

    jugadores.forEach((jugador)=>{
        $contenedorCancha.appendChild(jugador);
    })
};
