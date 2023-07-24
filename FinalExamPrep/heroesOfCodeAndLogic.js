function heroesOfCodeAndLogic(data) {
    let nHeroes = Number(data.shift());
    let heroes = {};

    for (let i = 0; i < nHeroes; i++) {
        let info = data.shift().split(" ");
        let hero = info[0];
        let hp = Number(info[1]);
        let mp = Number(info[2]);

        heroes[hero] = {
            hp,
            mp
        }
    }

    let line = data.shift();

    while (line !== "End") {

        let tokens = line.split(" - ");
        let action = tokens[0];
        let hero = tokens[1];

        if (!heroes.hasOwnProperty(hero)) {
            continue;
        }

        switch (action) {

            case "CastSpell":
                let castMana = Number(tokens[2]);
                let castSpell = tokens[3];
                if (heroes[hero].mp >= castMana) {
                    heroes[hero].mp -= castMana;
                    console.log(`${hero} has successfully cast ${castSpell} and now has ${heroes[hero].mp} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${castSpell}!`);
                }
                break;

            case "TakeDamage":
                let dmg = Number(tokens[2]);
                let dmgSpell = tokens[3];
                heroes[hero].hp -= dmg;
                if (heroes[hero].hp <= 0) {
                    console.log(`${hero} has been killed by ${dmgSpell}!`);
                    delete heroes[hero];
                } else {
                    console.log(`${hero} was hit for ${dmg} HP by ${dmgSpell} and now has ${heroes[hero].hp} HP left!`);
                }
                break;

            case "Recharge":
                let rechargeMp = Number(tokens[2]);
                let currMp = heroes[hero].mp;
                heroes[hero].mp += rechargeMp;
                if (heroes[hero].mp > 200) {
                    heroes[hero].mp = 200;
                    currMp = 200 - currMp;
                } else {
                    currMp = rechargeMp;
                }
                console.log(`${hero} recharged for ${currMp} MP!`);
                break;

            case "Heal":
                let heal = Number(tokens[2]);
                let currHp = heroes[hero].hp;
                heroes[hero].hp += heal;
                if (heroes[hero].hp > 100) {
                    heroes[hero].hp = 100;
                    currHp = 100 - currHp;
                } else {
                    currHp = heal;
                }
                console.log(`${hero} healed for ${currHp} HP!`);
                break;

        }

        line = data.shift();
    }

    for (let [hero, info] of Object.entries(heroes)) {
        console.log(hero);
        console.log(`  HP: ${info.hp}\n  MP: ${info.mp}`);
    }


}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])