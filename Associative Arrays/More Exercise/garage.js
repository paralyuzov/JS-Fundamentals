function garage(data) {
    let garage = {}
    for (let line of data) {
        if (line.includes(" - ")) {
            let info = line.split(" - ");
            let garageN = info.shift()

            if (!garage.hasOwnProperty(garageN)) {
                garage[garageN] = new Set();

            }
            garage[garageN].add(info)


        }
    }

    for (let [number, info] of Object.entries(garage)) {
        console.log(`Garage № ${number}`);
        for (let line of Array.from(info)) {
            let token = line[0].split(": ").join(" - ");
            console.log(`--- ${token}`)

        }
    }

}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
)