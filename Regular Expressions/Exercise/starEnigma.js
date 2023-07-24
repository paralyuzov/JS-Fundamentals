function starEnigma(data) {
    let nMassages = Number(data.shift());
    let pattern = /[star]/gmi;
    let result = [];

    for (let i = 0; i < nMassages; i++) {
        let currLine = data[i].split("");
        let count = 0;
        let match = pattern.exec(currLine);
        let decrypted = ""
        while (match !== null) {

            count++
            match = pattern.exec(currLine);

        }

        for (let j = 0; j < currLine.length; j++) {
            let asciValue = currLine[j].charCodeAt();
            let decrypt = String.fromCharCode(asciValue - count);
            decrypted += decrypt;

        }

        result.push(decrypted);
    }
    let atackedPlanets = [];
    let atackedPlanetsCount = 0
    let destroyedPlanets = [];
    let destroyedPlanetsCount = 0;
    let newPattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<type>[A|D])![^@\-!:>]*->(?<soldiers>[0-9]+)/gm
    result.forEach(x => {
        let match = x.matchAll(newPattern);
        for (let el of match) {
            let name = el.groups.planet;
            let population = +el.groups.population;
            let typeAD = el.groups.type;
            let soldiers = +el.groups.soldiers;
            if (typeAD === "A") {
                atackedPlanets.push(name);
                atackedPlanetsCount++
            } else if (typeAD === "D") {
                destroyedPlanetsCount++
                destroyedPlanets.push(name)
            }
        }
    })
    let sortAttacked = atackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortDestroyed = destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${atackedPlanetsCount}`);
    sortAttacked.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanetsCount}`);
    sortDestroyed.forEach(x => console.log(`-> ${x}`));


}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])