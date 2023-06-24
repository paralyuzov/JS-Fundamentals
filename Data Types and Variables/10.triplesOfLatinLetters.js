function triplesOfLatinLetters(string) {
    let stringToNum = Number(string);
    for (let i = 0; i < stringToNum; i++) {
        for (let j = 0; j < stringToNum; j++) {
            for (let k = 0; k < stringToNum; k++) {
                let firstChar = String.fromCharCode(97 + i);
                let secondChar = String.fromCharCode(97 + j);
                let thirdChar = String.fromCharCode(97 + k);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }


}
triplesOfLatinLetters(2)