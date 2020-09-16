/// <reference types="jquery"/>

fetch('jugadores.json').then(r => r.json()).then(r => {console.log(r)})

function iniciar(){
    fetch('jugadores.json')
        .then(r => r.json())
        .then(r => {
            const {count: totalJugadores, results: jugadores} = r;
            mostrarListaJugadores(jugadores);
        });
};

function mostrarListaJugadores(jugadores){
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
            seleccionarJugador(imagen, posicion, precio)
        });
        $listaJugadores.appendChild($link);
    });
};

function seleccionarJugador(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion1-del-centro").className === "silueta"){
        document.getElementById("formacion1-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion1-del-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-derecho").className === "silueta"){
        document.getElementById("formacion1-del-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-del-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "DEL" && document.getElementById("formacion1-del-izquierdo").className === "silueta"){
        document.getElementById("formacion1-del-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-del-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion1-med-centro").className === "silueta"){
        document.getElementById("formacion1-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion1-med-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-derecho").className === "silueta"){
        document.getElementById("formacion1-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-med-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion1-med-izquierdo").className === "silueta"){
        document.getElementById("formacion1-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-med-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-derecho").className === "silueta"){
        document.getElementById("formacion1-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-derecho").className === "silueta"){
        document.getElementById("formacion1-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion1-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion1-def-central-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "ARQ" && document.getElementById("formacion1-arq").className === "silueta"){
        document.getElementById("formacion1-arq").setAttribute("src", imagen);
        document.getElementById("formacion1-arq").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
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
    }
}

function reiniciarGranDt(){
    document.querySelector("#boton-reinicio").addEventListener("click",() =>{
        location.reload();
    } )
}

iniciar();
