function thePianist(data) {
    let numberOfPieces = Number(data.shift());
    let piecesList = {};
    for (let i = 0; i < numberOfPieces; i++) {
        let [piece, composer, key] = data.shift().split("|");
        if (!piecesList.hasOwnProperty(piece)) {
            piecesList[piece] = {};
        }
        piecesList[piece][composer] = key;

    }

    let line = data.shift();
    while (line !== "Stop") {
        let [command, piece, composer, key] = line.split("|");
        switch (command) {
            case "Add":
                if (piecesList.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    break;
                }
                piecesList[piece] = {};
                piecesList[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)

                break;

            case "Remove":
                if (!piecesList.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
                }

                delete piecesList[piece];
                console.log(`Successfully removed ${piece}!`);
                break;
            case "ChangeKey":
                if (!piecesList.hasOwnProperty(piece)) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;

                }
                let newKey = composer;
                for (let [keyComposer, valueKey] of Object.entries(piecesList[piece])) {
                    piecesList[piece][keyComposer] = newKey
                }
                console.log(`Changed the key of ${piece} to ${newKey}!`);
                break;

        }
        line = data.shift()
    }
    for (let [piece, composer] of Object.entries(piecesList)) {
        for (let composerKey of Object.keys(piecesList[piece])) {
            console.log(`${piece} -> Composer: ${composerKey}, Key: ${composer[composerKey]}`);
        }
    }

}
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])