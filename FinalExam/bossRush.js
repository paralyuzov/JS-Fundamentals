function bossRush(data) {
    let pattern = /(\|)([A-Z]{4,})\1:(#)([A-Za-z]+\s[A-Za-z]+)(#)/gm;
    let nInputs = Number(data.shift());
    for (let i = 0; i < nInputs; i++) {
        let line = data[i];
        let match = pattern.exec(line);
        if (match) {
            while (match !== null) {
                let boss = match[2];
                let tittle = match[4];
                console.log(`${boss}, The ${tittle}`);
                console.log(`>> Strength: ${boss.length}`);
                console.log(`>> Armor: ${tittle.length}`)


                match = pattern.exec(line)
            }
        } else {
            console.log(`Access denied!`)
        }
    }

}
bossRush((['3',

    '|STEFAN|:#H1gh Overseer#',

    '|IVAN|:#Master detective#',

    '|KARL|: #Marketing lead#']))