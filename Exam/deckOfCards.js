function deckOfCards(data) {
    let cardList = data.shift().split(", ");
    let commandsCount = Number(data.shift());

    for (let i = 0; i < commandsCount; i++) {
        let commands = data[i].split(", ");
        let currComand = commands[0];

        switch (currComand) {
            case "Add":
                let cardAdd = commands[1];
                if (!cardList.includes(cardAdd)) {
                    cardList.push(cardAdd);
                    console.log(`Card successfully added`);
                } else {
                    console.log(`Card is already in the deck`);
                }
                break;

            case "Remove":
                let removeCard = commands[1];
                if (cardList.includes(removeCard)) {
                    let removeIndex = cardList.indexOf(removeCard);
                    cardList.splice(removeIndex, 1);
                    console.log(`Card successfully removed`)
                } else {
                    console.log(`Card not found`);
                }
                break;

            case "Remove At":
                let removeAtIndex = Number(commands[1]);
                if (removeAtIndex >= 0 && removeAtIndex < cardList.length) {
                    cardList.splice(removeAtIndex, 1);
                    console.log(`Card successfully removed`);
                } else {
                    console.log(`Index out of range`);
                }
                break;

            case "Insert":
                let insertIndex = Number(commands[1]);
                let insertCard = commands[2];
                if (insertIndex >= 0 && insertIndex < cardList.length) {
                    if (!cardList.includes(insertCard)) {
                        cardList.splice(insertIndex, 0, insertCard);
                        console.log(`Card successfully added`);
                    } else {

                        console.log(`Card is already added`);
                    }

                } else {
                    console.log(`Index out of range`)
                }
                break;
        }
    }
    console.log(cardList.join(", "))

}

deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])