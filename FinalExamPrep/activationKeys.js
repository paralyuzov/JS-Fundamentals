function activationKeys(data) {

    let rawKey = data.shift();
    let line = data.shift();
    while (line !== "Generate") {
        let tokens = line.split(">>>");
        let action = tokens[0];

        switch (action) {
            case "Contains":
                let containsText = tokens[1];
                if (rawKey.includes(containsText)) {
                    console.log(`${rawKey} contains ${containsText}`);
                } else {
                    console.log(`Substring not found!`)
                }
                break;

            case "Flip":
                let command = tokens[1];
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);
                let leftSide = rawKey.substring(0, startIndex);
                let rigtSide = rawKey.substring(endIndex);
                if (command === "Upper") {

                    let subStr = rawKey.substring(startIndex, endIndex).toUpperCase();
                    rawKey = leftSide + subStr + rigtSide;

                } else if (command === "Lower") {

                    let subStr = rawKey.substring(startIndex, endIndex).toLowerCase();
                    rawKey = leftSide + subStr + rigtSide;
                }
                console.log(rawKey)
                break;

            case "Slice":
                let sliceStart = Number(tokens[1]);
                let sliceEnd = Number(tokens[2]);
                let leftSlice = rawKey.substring(0, sliceStart);
                let rightSlice = rawKey.substring(sliceEnd);
                rawKey = leftSlice + rightSlice;
                console.log(rawKey);
                break;
        }

        line = data.shift();
    }
    console.log(`Your activation key is: ${rawKey}`)

}
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]))

