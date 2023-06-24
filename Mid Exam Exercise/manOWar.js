function manOWar(data) {

    let pirateShip = data.shift().split(">").map(Number);
    let warShip = data.shift().split(">").map(Number);
    let shipMaxHealth = Number(data.shift());

    let index = 0;
    let commands = data[index];
    index++;

    while (commands !== "Retire") {
        let currComands = commands.split(" ");
        let command = currComands[0];

        switch (command) {
            case "Fire":
                let fireIndex = Number(currComands[1]);
                let damageFire = Number(currComands[2]);

                if (fireIndex >= 0 && fireIndex <= warShip.length) {
                    warShip[fireIndex] -= damageFire;
                    if (warShip[fireIndex] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;

            case "Defend":
                let startIndex = Number(currComands[1]);
                let endIndex = Number(currComands[2]);
                let damageDefend = Number(currComands[3]);

                if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {

                    for (let i = startIndex; i <= endIndex; i++) {

                        pirateShip[i] -= damageDefend;

                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;

            case "Repair":
                let repairIndex = Number(currComands[1]);
                let health = Number(currComands[2]);
                if (repairIndex >= 0 && repairIndex < pirateShip.length) {
                    pirateShip[repairIndex] += health;
                    if (pirateShip[repairIndex] > shipMaxHealth) {

                        pirateShip[repairIndex] = shipMaxHealth;
                    }
                }
                break;

            case "Status":
                let neededPercent = shipMaxHealth * 0.20;
                let statusPirate = pirateShip.filter(x => x < neededPercent);
                console.log(`${statusPirate.length} sections need repair.`);
                break;
        }

        commands = data[index];
        index++
    }

    let finalStatusPirate = pirateShip.reduce((a, b) => a + b, 0);
    let finalStatusWar = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${finalStatusPirate}`);
    console.log(`Warship status: ${finalStatusWar}`);

}
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]))