function secretChat(data) {
    let message = data.shift();

    let line = data.shift();
    while (line !== "Reveal") {
        let tokens = line.split(":|:");
        let command = tokens[0];

        switch (command) {
            case "InsertSpace":
                let insertIndex = Number(tokens[1]);
                let leftSide = message.slice(0, insertIndex);
                let rightSide = message.slice(insertIndex);
                message = leftSide + " " + rightSide;
                console.log(message)
                break;
            case "Reverse":
                let subText = tokens[1];
                if (message.includes(subText)) {
                    message = message.replace(subText, "");
                    let reverse = subText.split("").reverse("").join("");
                    message += reverse;
                    console.log(message)
                } else {
                    console.log(`error`);
                }
                break;
            case "ChangeAll":
                let subString = tokens[1];
                let replacment = tokens[2];
                if (message.includes(subString)) {
                    message = message.split(subString).join(replacment);
                    console.log(message);
                }

                break;
        }




        line = data.shift();
    }
    console.log(`You have a new text message: ${message}`)

}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])