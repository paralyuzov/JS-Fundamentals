function lettersChangeNumbers(data) {
    let alphabet = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26
    }


    let sum = 0;

    let line = data.replace(/\s+/g, ' ').trim().split(" ");
    console.log(line)
    for (let i = 0; i < line.length; i++) {
        let currEl = line[i].split("");
        let num = "";
        let firstLetter = "";
        let lastLetter = "";

        for (let j = 0; j < currEl.length; j++) {
            let char = currEl[j];
            if (!isNaN(char)) {
                num += char
            } else {
                if (j === currEl.length - 1) {
                    lastLetter = char;
                } else {
                    firstLetter = char
                }
            }

        }

        if (firstLetter === firstLetter.toUpperCase()) {
            sum += Number(num) / alphabet[firstLetter];
        } else {
            let toUpper = firstLetter.toUpperCase();
            sum += Number(num) * alphabet[toUpper];
        }

        if (lastLetter === lastLetter.toUpperCase()) {
            sum -= alphabet[lastLetter];
        } else {
            let toUpper = lastLetter.toUpperCase();
            sum += alphabet[toUpper];
        }


    }

    console.log(`${sum.toFixed(2)}`)


}
lettersChangeNumbers('  P34562Z  q2576f          H456z');

// str.replace(/\s+/g, ' ').trim()