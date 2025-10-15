export function battle(player, enemy) {
    let playerPower = player.attack * 2 + player.defense * 3 + player.hp / 4;
    let enemyPower = enemy.attack * 2 + enemy.defense * 3 + enemy.hp / 4;
    if (playerPower > enemyPower) {
        player.points += enemyPower;
        console.log(`🏆 ${player.name} ha ganado a ${enemy.name} y ha ganado ${enemyPower} puntos 🏆`);
    } else {
        player.points += Math.floor(player.points / 2);
        console.log(`💀 ${enemy.name} ha ganado a ${player.name} y le ha robado ${Math.floor(player.points / 2)} puntos 💀`);
    }
}