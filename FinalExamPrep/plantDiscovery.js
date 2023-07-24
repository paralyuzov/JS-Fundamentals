function plantDiscovery(data) {
    let n = Number(data.shift());
    let plantList = {};
    for (let i = 0; i < n; i++) {
        let info = data.shift().split("<->");
        let plant = info[0];
        let rearity = Number(info[1]);
        if (!plantList.hasOwnProperty(plant)) {
            plantList[plant] = { rearity, "raiting": [] };
        } else {
            plantList[plant].rarity = rearity
        }

    }

    let line = data.shift();
    while (line !== "Exhibition") {
        let tokens = line.split(": ");
        let command = tokens[0];
        let info = tokens[1].split(" - ");
        let plant = info[0];

        if (!plantList.hasOwnProperty(plant)) {
            console.log(`error`);
            line = data.shift();
            continue;
        }

        switch (command) {
            case "Rate":
                let rate = Number(info[1]);
                plantList[plant]["raiting"].push(rate);
                break;

            case "Update":
                let updateRearity = Number(info[1]);
                plantList[plant].rearity = updateRearity;
                break;

            case "Reset":
                plantList[plant]["raiting"] = [];
                break;
        }

        line = data.shift();
    }

    let arr = Object.entries(plantList);
    console.log(`Plants for the exhibition:`);

    for (let [plant, info] of arr) {
        let rarity = 0;
        let raiting = 0;

        for (let el of Object.values(info)) {
            if (typeof el == "object") {
                if (el.length === 0) {
                    raiting = 0;
                } else {
                    let avarage = el.reduce((a, b) => a + b, 0) / el.length;
                    raiting = avarage;
                }
            }
            if (typeof el === "number") {
                rarity = el;
            }
        }
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${raiting.toFixed(2)}`)
    }


}
plantDiscovery((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]))