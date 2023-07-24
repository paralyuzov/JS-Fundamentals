function pascalCaseSplitter(text) {
    let characters = text.split("");
    let result = "";

    for (let i = 0; i < characters.length; i++) {
        if (i === 0) {
            result += characters[i];
            continue;
        }

        if (characters[i] === characters[i].toUpperCase()) {
            result += `, ${characters[i]}`
        } else {
            result += characters[i];
        }
    }
    console.log(result)

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can');
pascalCaseSplitter('HoldTheDoor');
console.log(`Hold, The, Door`)