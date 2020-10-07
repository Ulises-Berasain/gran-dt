export function cargarJugadores(){
    return fetch('jugadores.json')
            .then(r => r.json())
};
