function inventory(data) {

    let result = [];

    data.forEach(element => {
        let [hero, level, items] = element.split(" / ");
        let obj = {
            hero,
            level,
            items
        }

        result.push(obj);

    })

    result.sort((a, b) => a.level - b.level);

    result.forEach(x => {
        console.log(`Hero: ${x.hero}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`)

    })


}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)