import { Product } from './product.js';

/**
 * Lista de productos disponibles en la tienda.
 * @type {Product[]}
 */
const products = [
    new Product("Espada del Gladiador", 12500, "Épica", "Arma", "+50 ATQ"),
    new Product("Escudo del Centinela", 9900, "Rara", "Defensa", "+35 DEF"),
    new Product("Armadura de Asalto", 15800, "Épica", "Armadura", "+25 DEF, +10% resistencia"),
    new Product("Botas del Jinete", 7200, "Común", "Equipo", "+10 Velocidad"),
    new Product("Anillo del Fénix", 13400, "Legendaria", "Accesorio", "Revivir una vez por combate"),
    new Product("Poción de Furia", 450, "Común", "Consumible", "+20% daño por 30s"),
    new Product("Amuleto del Asesino", 8700, "Rara", "Accesorio", "+15% crítico"),
    new Product("Casco del Conquistador", 11100, "Épica", "Armadura", "+20 DEF, +5% bloqueo"),
    new Product("Guantes de Precisión", 5600, "Infrecuente", "Equipo", "+10% puntería"),
    new Product("Capa de Invisibilidad", 19900, "Legendaria", "Equipo", "Invisibilidad 5s al recibir daño")
];

/**
 * Filtra los productos por rareza.
 * 
 * @param {string} rarity - Rareza del producto (por ejemplo, "Común", "Rara", "Épica", "Legendaria").
 * @param {Product[]} products - Lista de productos a filtrar.
 * @returns {Product[]} Lista de productos que coinciden con la rareza especificada.
 */
function filtrar(rarity, products) {
    return products.filter(product => product.rarity === rarity);
}

/**
 * Busca un producto por su nombre.
 * 
 * @param {Product[]} products - Lista de productos en los que buscar.
 * @param {string} name - Nombre del producto que se desea encontrar.
 * @returns {Product|undefined} El producto encontrado o `undefined` si no existe.
 */
function buscar(products, name) {
    return products.find(product => product.name === name);
}

/**
 * Aplica un descuento del 10% a todos los productos de un tipo específico.
 * 
 * @param {Product[]} products - Lista de productos a los que aplicar el descuento.
 * @param {string} type - Tipo de producto (por ejemplo, "Arma", "Armadura", "Accesorio").
 */
function descuento(products, type) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].type === type) {
            products[i].price = products[i].price * 0.9;
        }
    }
}

/**
 * Muestra la información de un producto.
 * 
 * @param {Product} name - Instancia del producto a presentar.
 * @returns {string} Representación textual del producto.
 */
function mostrar(name) {
    return name.presentar();
}
