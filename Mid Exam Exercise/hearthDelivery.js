function hearthDelivery(input) {
    let neighborhood = input[0].split("@").map(Number);
    index = 1;
    let commands = input[index];
    index++;
    let position = 0;

    while (commands !== "Love!") {
        let currComand = commands.split(" ");
        let value = Number(currComand[1]);
        position += value;

        if (position > neighborhood.length - 1) {
            position = 0;
        }

        if (neighborhood[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
            commands = input[index];
            index++
            continue;
        }

        neighborhood[position] -= 2;

        if (neighborhood[position] === 0) {
            console.log(`Place ${position} has Valentine's day.`)
        }


        commands = input[index];
        index++
    }

    let failPlaces = 0;
    let isFailed = false;

    for (const element of neighborhood) {
        if (element > 0) {
            failPlaces++
            isFailed = true;
        }
    }

    console.log(`Cupid's last position was ${position}.`)
    if (!isFailed) {
        console.log(`Mission was successful.`)
    } else {
        console.log(`Cupid has failed ${failPlaces} places.`)
    }
}
hearthDelivery((["4@2@4@2",
"Jump 1",
"Jump 2",
"Jump 1",
"Jump 2",
"Jump 2",
"Jump 2",
"Love!"])
)