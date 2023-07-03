function cardGame(data) {
    let map = new Map();
    let cardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let multiplyer = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    for (let line of data) {
        let tokens = line.split(": ");
        let name = tokens[0];
        let cards = tokens[1].split(", ");
        cards.forEach(card => {
            if (!map.has(name)) {
                map.set(name, new Set())
            }

            map.get(name).add(card);

        });

    }
    let arr = Array.from(map.entries());
    for (let line of arr) {

        let name = line[0];
        let cards = Array.from(line[1]);
        let sum = 0

        for (let card of cards) {
            let cardInfo = card.split("");
            let powerInfo = cardInfo.splice(0, cardInfo.length - 1).join("");
            let typeInfo = cardInfo[cardInfo.length - 1];

            let power = cardPower[powerInfo];
            let type = multiplyer[typeInfo];
            sum += power * type

        }
        console.log(`${name}: ${sum}`)
    }

}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
)