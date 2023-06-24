function taxCalculator(data) {
    let commands = data[0].split(">>");
    let totalTaxCollected = 0;
    for(let i = 0; i < commands.length; i++) {
        let currCommand = commands[i].split(" ");
        let carType = currCommand[0];
        
        switch(carType) {
            case "family" :
                let familyYearsTax = Number(currCommand[1]);
                let familyKm = Number(currCommand[2]);
                let familyTaxes = Math.floor(familyKm / 3000) * 12 + (50 - familyYearsTax * 5);
                totalTaxCollected += familyTaxes
                console.log(`A ${carType} car will pay ${familyTaxes.toFixed(2)} euros in taxes.`);
                break;

            case "heavyDuty" :
                let heavyDutyYearsTax = Number(currCommand[1]);
                let heavyDutyKm = Number(currCommand[2]);
                let heavyDutyTaxes = Math.floor(heavyDutyKm / 9000) * 14 + (80 - heavyDutyYearsTax * 8);
                totalTaxCollected += heavyDutyTaxes
                console.log(`A ${carType} car will pay ${heavyDutyTaxes.toFixed(2)} euros in taxes.`);
                break;

            case "sports":
                let sportsYearsTax = Number(currCommand[1]);
                let sportsKm = Number(currCommand[2]);
                let sportsTaxes = Math.floor(sportsKm / 2000) * 18 + (100 - sportsYearsTax * 9);
                totalTaxCollected += sportsTaxes
                console.log(`A ${carType} car will pay ${sportsTaxes.toFixed(2)} euros in taxes.`);
                break;

            default:
                console.log(`Invalid car type.`);
                break;

        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxCollected.toFixed(2)} euros in taxes.`);

}
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])