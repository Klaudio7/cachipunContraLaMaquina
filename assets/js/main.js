let numeroDeIntentos = +prompt("¿Cuántas veces deseas jugar?");

let i = 1;
while (i <= numeroDeIntentos) {
    let opcionUsuario = prompt("Elige tu opción").toLowerCase();
    let opciones = ['piedra', 'papel', 'tijeras'];
    let opcionPc = opciones[Math.floor(Math.random() * opciones.length)];

    if (opcionUsuario === opcionPc) {
        alert("Empate");
    } else if (
        (opcionUsuario === "tijeras" && opcionPc === "papel") ||
        (opcionUsuario === "papel" && opcionPc === "piedra") ||
        (opcionUsuario === "piedra" && opcionPc === "tijeras")
    ) {
        alert("Ganaste");
    } else {
        alert("Perdiste");
    }

    alert(`Tu turno: ${opcionUsuario}\nTurno PC: ${opcionPc}`);
    i++;
}