import { market } from "./modules/market.js";
import { Product } from "./modules/product.js";
//enseñar mercado
console.log("Inicio Mercado");
market.forEach(product => {
    console.log(show(product)); // usamos la función show() para mostrar info
});

//descuento a legendarios
console.log("\n=== Aplicando 10% de descuento a productos Legendarios ===");
const discountedMarket = applyDiscount(market, "Legendaria", 10);
discountedMarket.forEach(product => console.log(show(product)));

// Filtrar por rareza legendaria
const epicProducts = filterMarket("Legendaria", market);
console.log("\n=== Productos Legendarios ===");
epicProducts.forEach(product => console.log(show(product)));

// Buscar un producto especifico
const espada = search(market, "Espada del Gladiador");
console.log("\n=== Buscando Espada del Gladiador ===");
if (espada) {
    console.log(show(espada));
} else {
    console.log("Producto no encontrado");
}

