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
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
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

function seleccionarJugadorFormacion2(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion2-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "DEL" && document.getElementById("formacion2-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-del-centro-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion2-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion2-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-centro-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-derecho").className === "silueta"){
        document.getElementById("formacion2-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-med-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion2-med-izquierdo").className === "silueta"){
        document.getElementById("formacion2-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-med-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-derecho").className === "silueta"){
        document.getElementById("formacion2-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-derecho").className === "silueta"){
        document.getElementById("formacion2-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion2-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion2-def-central-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
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

function seleccionarJugadorFormacion3(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion3-del-centro").className === "silueta"){
        document.getElementById("formacion3-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-del-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-centro").className === "silueta"){
        document.getElementById("formacion3-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion3-med-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion3-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-lateral-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-derecho").className === "silueta"){
        document.getElementById("formacion3-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-med-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion3-med-izquierdo").className === "silueta"){
        document.getElementById("formacion3-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-med-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-derecho").className === "silueta"){
        document.getElementById("formacion3-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-derecho").className === "silueta"){
        document.getElementById("formacion3-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion3-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion3-def-central-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
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

function seleccionarJugadorFormacion4(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion4-del-centro").className === "silueta"){
        document.getElementById("formacion4-del-centro").setAttribute("src", imagen);
        document.getElementById("formacion4-del-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-derecho").className === "silueta"){
        document.getElementById("formacion4-med-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-centro-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion4-med-derecho").className === "silueta"){
        document.getElementById("formacion4-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-med-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion4-med-izquierdo").className === "silueta"){
        document.getElementById("formacion4-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-med-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-derecho").className === "silueta"){
        document.getElementById("formacion4-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-derecho").className === "silueta"){
        document.getElementById("formacion4-def-central-derecho").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-izquierdo").className === "silueta"){
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion4-def-central-medio").className === "silueta"){
        document.getElementById("formacion4-def-central-medio").setAttribute("src", imagen);
        document.getElementById("formacion4-def-central-medio").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
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

function seleccionarJugadorFormacion5(imagen, posicion, precio, nombre){
    if(posicion === "DEL" && document.getElementById("formacion5-del-centro-derecho").className === "silueta"){
        document.getElementById("formacion5-del-centro-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "DEL" && document.getElementById("formacion5-del-centro-izquierdo").className === "silueta"){
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-del-centro-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-centro").className === "silueta"){
        document.getElementById("formacion5-med-centro").setAttribute("src", imagen);
        document.getElementById("formacion5-med-centro").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if(posicion === "MED" && document.getElementById("formacion5-med-lateral-derecho").className === "silueta"){
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-lateral-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-lateral-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-derecho").className === "silueta"){
        document.getElementById("formacion5-med-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-med-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "MED" && document.getElementById("formacion5-med-izquierdo").className === "silueta"){
        document.getElementById("formacion5-med-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-med-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-derecho").className === "silueta"){
        document.getElementById("formacion5-def-derecho").setAttribute("src", imagen);
        document.getElementById("formacion5-def-derecho").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-izquierdo").className === "silueta"){
        document.getElementById("formacion5-def-izquierdo").setAttribute("src", imagen);
        document.getElementById("formacion5-def-izquierdo").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "DEF" && document.getElementById("formacion5-def-central").className === "silueta"){
        document.getElementById("formacion5-def-central").setAttribute("src", imagen);
        document.getElementById("formacion5-def-central").setAttribute("class", nombre);
        document.getElementById("dinero").innerText = document.getElementById("dinero").innerText - precio;
    }
    else if (posicion === "ARQ" && document.getElementById("arq").className === "silueta"){
        document.getElementById("arq").setAttribute("src", imagen);
        document.getElementById("arq").setAttribute("class", nombre);
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

function cambiarFormacion(){
  document.getElementById("selector-formaciones").addEventListener("change",
    ()=>{ 

        const $links = document.querySelectorAll("a");
        $links.forEach((link)=>{
            link.className = "list-group-item list-group-item-action";
            link.setAttribute("id", "jugadores");
        });

        const $contenedorCancha = document.getElementById("contenedor-cancha");
        $contenedorCancha.innerHTML = "";
        
        const $dinero = document.getElementById("dinero");
        $dinero.innerHTML = 65000000;

        const $cancha = document.createElement("img");
        const $arquero = document.createElement("img");
        const $formacion = document.getElementById("selector-formaciones").value;
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
        const jugadores = [$jugador1, $jugador2, $jugador3, $jugador4, $jugador5, $jugador6, $jugador7, $jugador8, $jugador9, $jugador10]

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

        function crearJugadores(jugadores){
            jugadores.forEach((jugador)=>{
                agregarSilueta(jugador);
                jugador.setAttribute("id", `${saberPosicion($formacion, jugador)}`);
            })
        }

        function agregarJugadorEnLaCancha(jugadores){
            jugadores.forEach((jugador)=>{
                $contenedorCancha.appendChild(jugador);
            })
        }

        function saberPosicion(formacion, jugador){
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
        }
    })
};

function agregarSilueta(jugador){
    jugador.setAttribute("src", "./img/silueta.gif");
    jugador.className = "silueta";
    jugador.setAttribute("alt", "jugador");
};

iniciar();
cambiarFormacion();
