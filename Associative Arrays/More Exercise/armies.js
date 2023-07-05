function armies(data) {
    let temp = new Map();
    let info = {};
    for (let line of data) {
        if (line.includes("arrives")) {
            let leader = line.split(" arrives")[0];
            info[leader] = new Map();

        } else if (line.includes(": ")) {
            let [leader, token] = line.split(": ");
            let [armyName, count] = token.split(", ");
            if (info.hasOwnProperty(leader)) {
                info[leader].set(armyName, Number(count));
                temp.set(armyName, leader)

            }

        } else if (line.includes(" + ")) {
            let [armyName, count] = line.split(" + ");
            if (temp.has(armyName)) {
                let leader = temp.get(armyName);
                if (info[leader].has(armyName)) {
                    let oldValue = info[leader].get(armyName);
                    info[leader].set(armyName, oldValue + Number(count));
                }
            }

        } else if (line.includes("defeated")) {
            let leader = line.split(" defeated")[0];
            if (info.hasOwnProperty(leader)) {
                delete info[leader];
            }
        }
    }

    let arr = Object.entries(info)
    let totalArmy = new Map();
    let armyInfo = new Map();


    for (let [general, info] of arr) {
        let sum = 0
        for (let [armyName, soldiers] of Array.from(info)) {
            sum += soldiers;
            armyInfo.set(soldiers, armyName)

        }
        totalArmy.set(general, sum);

    }
    let sortedTotalArmy = Array.from(totalArmy).sort((a, b) => b[1] - a[1]);
    let sortedArmyInfo = Array.from(armyInfo).sort((a, b) => b[0] - a[0]);
    for (let [general, total] of sortedTotalArmy) {
        console.log(`${general}: ${total}`);
        for (let [soldiers, armyName] of sortedArmyInfo) {
            if (info[general].get(armyName) === soldiers) {
                console.log(`>>> ${armyName} - ${soldiers}`)
            }
        }
    }

}
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'])