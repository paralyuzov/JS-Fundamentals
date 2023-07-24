function pirates(data) {
    let cities = {};
    for (let i = 0; i < data.length; i++) {
        let line = data.shift().split("||");
        if (line[0] === "Sail") {
            break;
        }

        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                population,
                gold
            }
        } else {
            cities[city].population += population;
            cities[city].gold += gold;
        }
    }
    let line = data.shift();
    while (line !== "End") {
        let tokens = line.split("=>");
        let action = tokens[0];
        let city = tokens[1];

        if (cities.hasOwnProperty(city)) {
            switch (action) {
                case "Plunder":
                    let plunderPeople = Number(tokens[2]);
                    let plunderGold = Number(tokens[3]);
                    cities[city].population -= plunderPeople;
                    cities[city].gold -= plunderGold;
                    console.log(`${city} plundered! ${plunderGold} gold stolen, ${plunderPeople} citizens killed.`)
                    if (cities[city].population <= 0 || cities[city].gold <= 0) {
                        console.log(`${city} has been wiped off the map!`)
                        delete cities[city];
                    }
                    break;
                case "Prosper":
                    let prosperGold = Number(tokens[2]);
                    if (prosperGold >= 0) {
                        cities[city].gold += prosperGold;
                        console.log(`${prosperGold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`)
                    } else {
                        console.log(`Gold added cannot be a negative number!`);
                    }
                    break;
            }
        }

        line = data.shift();
    }

    let arr = Object.entries(cities);
    if (arr.length > 0) {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`)
        for (let [town, info] of arr) {
            console.log(`${town} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]))