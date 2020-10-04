import { mostrarListaJugadores } from "/src/servicio/jugadores.js"

export function iniciar(){
    fetch('jugadores.json')
        .then(r => r.json())
        .then(r => {
            const {count: totalJugadores, results: jugadores} = r;
            mostrarListaJugadores(jugadores);
    });
};
