function muOnline(data) {
    let health = 100;
    let bitcoins = 0;
    let rooms = data.split("|");

    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i].split(" ");
        let room = command[0]
        let value = Number(command[1]);

        switch (room) {
            case "potion":
                if (health === 100) {
                    continue;
                } else {
                    health += value;
                    if (health > 100) {
                        let difference = Math.abs(health - (100 + value));
                        health = 100;
                        console.log(`You healed for ${difference} hp.`)
                    } else {
                        console.log(`You healed for ${value} hp.`)
                    }

                }
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`)
                break;

            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${room}.`)
                } else {
                    console.log(`You died! Killed by ${room}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }

                break;
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`)
    }
}
muOnline("bugiBarabata 10|potion 30|ChichoPesho 10|chest 10|vratata(iSiS4upiRykata) 25|chest 110")