function theImitationGame(data) {
    let arr = data.slice();
    let massage = arr.shift();
    let temp = ""

    let currLine = arr.shift();

    while (currLine !== "Decode") {

        let tokens = currLine.split("|");
        let command = tokens[0];
        switch (command) {
            case "ChangeAll":
                let substring = tokens[1];
                let replacement = tokens[2];

                temp = massage.split(substring).join(replacement);
                massage = temp;
                break;
            case "Insert":
                let insertIndex = Number(tokens[1]);
                let value = tokens[2];
                temp = massage.split("");
                temp.splice(insertIndex, 0, value);
                massage = temp.join("");
                break;
            case "Move":
                let nLetters = Number(tokens[1]);
                let lettersMove = massage.substring(0, nLetters);
                temp = massage.replace(lettersMove, "");
                temp += lettersMove;
                massage = temp;
                break;

        }


        currLine = arr.shift();
    }
    console.log(`The decrypted message is: ${massage}`)

}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])