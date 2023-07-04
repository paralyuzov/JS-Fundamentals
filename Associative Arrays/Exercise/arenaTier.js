function arenaTier(data) {
    let gladiatorsPool = new Map();

    for (let line of data) {
        if (line === "Ave Cesar") {
            break;
        }

        if (line.includes(" -> ")) {
            let [name, technique, skill] = line.split(" -> ");
            if (!gladiatorsPool.has(name)) {
                gladiatorsPool.set(name, { [technique]: Number(skill) });
            } else if (gladiatorsPool.has(name)) {
                let currTechnique = gladiatorsPool.get(name);
                if (!currTechnique.hasOwnProperty(technique)) {
                    currTechnique[technique] = Number(skill);
                } else {
                    if (currTechnique[technique] < skill) {
                        currTechnique[technique] = Number(skill);
                    }
                }
            }


        } else if (line.includes(" vs ")) {
            let [personOne, personTwo] = line.split(" vs ");
            if (gladiatorsPool.has(personOne) && gladiatorsPool.has(personTwo)) {
                let personOneSkill = gladiatorsPool.get(personOne);
                let personTwoSkill = gladiatorsPool.get(personTwo);
                for (let elOne in personOneSkill) {
                    for (let elTwo in personTwoSkill) {
                        if (elOne === elTwo) {
                            if (personOneSkill[elOne] > personTwoSkill[elTwo]) {
                                gladiatorsPool.delete(personTwo)
                            } else if (personOneSkill[elOne] < personTwoSkill[elTwo]) {
                                gladiatorsPool.delete(personOne)
                            }
                        }
                    }
                }
            }


        }
    }
    let gladiatorSkill = new Map();
    for (let [name, tech] of Array.from(gladiatorsPool)) {
        let sum = 0;
        for (let [key, value] of Object.entries(tech)) {
            sum += value

        }
        gladiatorSkill.set(name, sum)
    }
    let sortGladitorPoints = Array.from(gladiatorSkill).sort((a, b) => b[1] - a[1]) || a[0].localeCompare(b[0]);

    for (let [name, point] of sortGladitorPoints) {
        console.log(`${name}: ${point} skill`);
        let sortTech = Object.entries(gladiatorsPool.get(name)).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        for (let [key, value] of sortTech) {
            console.log(`- ${key} <!> ${value}`)
        }
    }




}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])