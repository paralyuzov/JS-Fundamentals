function mirrorWords(data) {

    let patern = /([@#])([A-Za-z]{3,})(\1)(\1)([A-Za-z]{3,})(\1)/gm;

    let match = patern.exec(data);
    let count = 0;
    let result = [];
    if (match === null) {
        console.log(`No word pairs found!`)
    }


    while (match !== null) {

        let firstWord = match[2];
        let secondWord = match[5];
        let reverseWord = ""
        if (match) {
            count++;
            for (let i = secondWord.length - 1; i >= 0; i--) {
                let character = secondWord[i];
                reverseWord += character;

            }
            if (firstWord === reverseWord) {
                result.push(`${firstWord} <=> ${secondWord}`);
            }

        }

        match = patern.exec(data)
    }
    if (count > 0) {
        console.log(`${count} word pairs found!`)
    }
    if (result.length > 0) {
        console.log(`The mirror words are:`)
        console.log(result.join(", "))
    } else {
        console.log(`No mirror words!`)
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)