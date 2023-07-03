function travelTime(data) {
    let obj = {};

    for (let line of data) {
        let [country, city, cost] = line.split(" > ");

        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }
        if (!obj[country].hasOwnProperty(city)) {
            obj[country][city] = Number(cost);
        } else if (obj[country][city] > Number(cost)) {
            obj[country][city] = Number(cost)
        }
    }

    let asArray = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
    asArray.forEach(([country,town]) => {

        let sortedTowns = Object.entries(town).sort((a,b) => a[1] - b[1])
        let string = `${country} -> `
        for(let line of sortedTowns) {
            let town = line[0];
            let price = line[1];
            string += `${town} -> ${price} `
        }
        console.log(string)

    })

}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])


