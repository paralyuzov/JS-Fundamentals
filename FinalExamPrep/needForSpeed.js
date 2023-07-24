function needForSpeed(data) {
    let nCars = Number(data.shift());
    let carList = {};

    for (let i = 0; i < nCars; i++) {
        let carInfo = data.shift().split("|");
        let car = carInfo[0];
        let mileage = Number(carInfo[1]);
        let fuel = Number(carInfo[2]);

        carList[car] = { mileage, fuel };
    }

    let line = data.shift();
    while (line !== "Stop") {
        let tokens = line.split(" : ");
        let command = tokens[0];
        let car = tokens[1];
        let firstValue = Number(tokens[2]);
        let secondValue = Number(tokens[3]);
        if (!carList.hasOwnProperty(car)) {
            continue;
        }

        switch (command) {
            case "Drive":
                if (carList[car].fuel >= secondValue) {
                    carList[car].mileage += firstValue;
                    carList[car].fuel -= secondValue;
                    console.log(`${car} driven for ${firstValue} kilometers. ${secondValue} liters of fuel consumed.`);

                    if (carList[car].mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`)
                        delete carList[car];

                    }
                } else {
                    console.log(`Not enough fuel to make that ride`)
                }
                break;
            case "Refuel":
                let diff = 0;
                if (carList[car].fuel + firstValue > 75) {
                    diff = 75 - carList[car].fuel;
                    carList[car].fuel = 75
                } else {
                    carList[car].fuel += firstValue;
                    diff = firstValue;
                }

                console.log(`${car} refueled with ${diff} liters`);
                break;
            case "Revert":
                carList[car].mileage -= firstValue;
                if (carList[car].mileage < 10000) {
                    carList[car].mileage = 10000;
                    break;
                }
                console.log(`${car} mileage decreased by ${firstValue} kilometers`)

        }

        line = data.shift();
    }

    for (let [car, info] of Object.entries(carList)) {
        console.log(`${car} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`)
    }


}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])