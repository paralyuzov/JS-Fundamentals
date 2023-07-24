function passwordReset(data) {

    let text = data.shift();
    let line = data.shift();
    let result = "";

    while (line !== "Done") {
        let tokens = line.split(" ");
        let action = tokens[0];

        switch (action) {
            case "TakeOdd":
                let arrText = text.split("");
                for (let i = 0; i < arrText.length; i++) {
                    let char = arrText[i];
                    if (i % 2 !== 0) {
                        result += char;
                        text = result;
                    }
                }
                console.log(text)
                break;
            case "Cut":
                let cutIndex = Number(tokens[1]);
                let cutLength = Number(tokens[2]);
                let leftSide = text.substring(0, cutIndex);
                let rightSide = text.substring(cutIndex + cutLength);

                text = leftSide + rightSide;
                console.log(text)

                break;
            case "Substitute":
                let subStr = tokens[1];
                let replacement = tokens[2];
                if (text.includes(subStr)) {
                    while (text.includes(subStr)) {
                        text = text.replace(subStr, replacement)
                    }
                    console.log(text)
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }


        line = data.shift();
    }
    console.log(`Your password is: ${text}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))