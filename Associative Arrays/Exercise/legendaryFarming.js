function legendaryFarming(data) {
    let dataToLowCase = data.toLowerCase().split(" ");
    let junk = new Map()
    let legendaryItems = {
        "Shadowmourne": { "shards": 0 },
        "Valanyr": { "fragments": 0 },
        "Dragonwrath": { "motes": 0 }
    }

    let isItReach = false;

    for (let i = 0; i < dataToLowCase.length; i += 2) {
        if (isItReach) {
            break;
        }
        let quantity = Number(dataToLowCase[i]);
        let material = dataToLowCase[i + 1];

        switch (material) {
            case "shards":
                legendaryItems["Shadowmourne"]["shards"] += quantity;

                if (legendaryItems["Shadowmourne"][material] >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    legendaryItems["Shadowmourne"][material] = legendaryItems["Shadowmourne"][material] - 250;

                    isItReach = true;
                }
                break;

            case "fragments":

                legendaryItems["Valanyr"]["fragments"] += quantity

                if (legendaryItems["Valanyr"][material] >= 250) {
                    console.log(`Valanyr obtained!`);
                    legendaryItems["Valanyr"][material] = legendaryItems["Valanyr"][material] - 250;

                    isItReach = true;
                }
                break;

            case "motes":
                legendaryItems["Dragonwrath"]["motes"] += quantity

                if (legendaryItems["Dragonwrath"][material] >= 250) {

                    console.log(`Dragonwrath obtained!`);
                    legendaryItems["Dragonwrath"][material] = legendaryItems["Dragonwrath"][material] - 250;
                    isItReach = true;
                }
                break;


            default:
                if (!junk.has(material)) {
                    junk.set(material, quantity);
                } else {
                    let oldValue = junk.get(material);
                    junk.set(material, oldValue + quantity)
                }
                break;
        }
    }
    let arrLegendary = Array.from(Object.entries(legendaryItems));

    let tempArr = []
    for (let line of arrLegendary) {
        let array = Array.from(Object.entries(line[1]));
        tempArr.push(array)

    }

    let sortLegendary = tempArr.sort((a, b) => b[0][1] - a[0][1] || a[0][0].localeCompare(b[0][0]));
    sortLegendary.forEach(element => console.log(`${element[0][0]}: ${element[0][1]}`))
    let arrJunk = Array.from(junk);
    let sortJunk = arrJunk.sort((a, b) => a[0].localeCompare(b[0]));
    sortJunk.forEach(element => console.log(`${element[0]}: ${element[1]}`))

}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')