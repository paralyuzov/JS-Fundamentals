function treasureHunt(data) {

    let initialLoot = data.shift().split("|");
    let index = 0;
    let commands = data[index];
    index++;

    while (commands !== "Yohoho!") {

        let currComands = commands.split(" ");
        let command = currComands[0];

        switch (command) {
            case "Loot":

                for (let i = 1; i < currComands.length; i++) {
                    let lootItem = currComands[i];
                    if (!initialLoot.includes(lootItem)) {
                        initialLoot.unshift(lootItem)
                    }
                }
                break;

            case "Drop":
                let dropIndex = Number(currComands[1]);
                if (dropIndex >= 0 && dropIndex < initialLoot.length) {
                    let removedValue = initialLoot.splice(dropIndex, 1);
                    initialLoot.push(removedValue[0]);
                }
                break;

            case "Steal":
                let stealIndex = Number(currComands[1]);
                let stealItems = initialLoot.splice(-stealIndex);
                console.log(stealItems.join(", "));
                break;

        }

        commands = data[index];
        index++

    }

    let arrAsString = initialLoot.join("");
    let average = arrAsString.length / initialLoot.length;
    if (arrAsString.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }

}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])