import { Enemigo, JefeFinal } from "./modules/enemies";

// creacion de enemigos

const Enemigos = [
    new Enemigo('enemigo', 'Goblin', 3, 30),
    new Enemigo('enemigo', 'Orco', 5, 50),
    new Enemigo('enemigo', 'Bandido', 6, 60)
];

// crear const enemigo va ser una lista 
const JefeFinales = [
    new JefeFinal('Jefe final', 'Dragón', 50, 300, 'Aliento de fuego', 1.3),
    new JefeFinal('Jefe final', 'Monstruo', 60, 400, 'Invocación de esqueletos', 1.3)
];

// mostrar datos
Enemigos.forEach(e => console.log(e.action()));
JefeFinales.forEach(j => console.log(j.action()));
