/*Clase jugador*/

export class Player {
    name;
    hp;
    hpMax;
    inventory;
    points;

    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hpMax = 200;
        this.hp = this.hpMax;
        this.inventory = [] 
    }


    addItem(item) {
        this.inventory.push(deepClone(item));
    }

    getPoint(numberPoints) {this.points = (   this.points + numberPoints)}

}