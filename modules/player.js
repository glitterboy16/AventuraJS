/*Clase jugador*/

export class Player {
    name;
    hp;
    hpMax;
    inventory;
    points;

    constructor(name) {
        this.name = name;
        this.points = 1000;
        this.hpMax = 200;
        this.hp = this.hpMax;
        this.inventory = [];
    }

    addItem(item) {
        this.inventory.push(deepClone(item));
    }

    getPoint(numberPoints) {
        this.points += numberPoints;
    }


    /**
     * Comprar un producto del mercado y añadir al inventario
     * @param {string} name
     * @param {Product[]} market
     * @returns {boolean}
     */
    BuyItem(name, market) {
        const item = market.find(product => product.name === name);
        if (item) {
            this.addItem(item);
            return true;
        }
        return false;
    }

/**
     * Usar un item generco del inventario
     * @param {string} itemName - Nombre del ítem
     * @param {string|string[]} types - Tipo(s) del ítem (uno o varios)
     * @param {string} stat - Stat a actualizar (e.g., 'attack', 'defense', 'hp')
     * @returns {string} Mensaje de resultado
     */
    useItem(itemName, types, stat) {
        // normalizar types a array cuando se pase como string
        const typeArray = Array.isArray(types) ? types : [types];
        
        // Buscar el ítem 
        const item = this.inventory.find(product => 
            typeArray.includes(product.type) && product.name === itemName
        );
        
        if (!item) {
            return `No tienes ese item en el inventario.`;
        }
        
        // Aplicar bonus seguun el stat
        let bonusApplied = item.bonus;
        switch (stat) {
            case 'attack':
                this.attack += bonusApplied;
                break;
            case 'defense':
                this.defense += bonusApplied;
                break;
            case 'hp':
                bonusApplied = Math.min(this.hp + item.bonus, this.hpMax) - this.hp; // Calcula lo realmente recuperado
                this.hp += bonusApplied;
                break;
            default:
                return "Stat no válido.";
        }
        
        // Remover del inventario
        this.inventory = this.inventory.filter(product => product !== item);
        
        // Mensaje genérico
        return `Has usado ${item.name} y ${stat === 'hp' ? 'recuperas' : 'tu ' + stat + ' aumenta en'} ${bonusApplied} (${stat.charAt(0).toUpperCase() + stat.slice(1)} actual: ${this[stat]})`;
    }

    // Ahora, los métodos específicos solo llaman al genérico
    useAttackItem(itemName) {
        return this.useItem(itemName, "Arma", "attack");
    }

    useDefenseItem(itemName) {
        return this.useItem(itemName, ["Defensa", "Armadura"], "defense");
    }

    useHpItem(itemName) {
        return this.useItem(itemName, "Consumible", "hp");
    }

    //Ejemplo en el console.log
    //console.log(player.useAttackItem('Espada'));
}
