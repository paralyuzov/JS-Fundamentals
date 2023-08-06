function decryptingCommands(data) {
  let message = data.shift();
  let line = data.shift();
  let sum = 0;
  while (line !== "Finish") {
    let tokens = line.split(" ");
    let command = tokens[0];
    switch (command) {
      case "Replace":
        let currChar = tokens[1];
        let newChar = tokens[2];
        while (message.includes(currChar)) {
          message = message.replace(currChar, newChar);
        }
        console.log(message)
        break;

      case "Cut":
        let startCutIndex = Number(tokens[1]);
        let cutEndIndex = Number(tokens[2]);
        if (startCutIndex >= 0 && startCutIndex < message.length && cutEndIndex >= 0 && cutEndIndex < message.length) {
          let leftSide = message.substring(0, startCutIndex);
          let rightSide = message.substring(cutEndIndex + 1);
          message = leftSide + rightSide;
          console.log(message)
        } else {
          console.log(`Invalid indices!`)
        }
        break;
      case "Make":
        let makeCommand = tokens[1];
        if (makeCommand === "Upper") {
          message = message.toUpperCase();
        } else if (makeCommand === "Lower") {
          message = message.toLowerCase();
        }
        console.log(message)
        break;

      case "Check":
        let checkString = tokens[1];
        if (message.includes(checkString)) {
          console.log(`Message contains ${checkString}`);
        } else {
          console.log(`Message doesn't contain ${checkString}`);
        }
        break;

      case "Sum":
        let sumStartIndex = Number(tokens[1]);
        let sumEndIndex = Number(tokens[2]);
        if (sumStartIndex >= 0 && sumStartIndex < message.length && sumEndIndex >= 0 && sumEndIndex < message.length) {
          let subString = message.substring(sumStartIndex, sumEndIndex + 1);
          for (let i = 0; i < subString.length; i++) {
            let asciiValue = subString[i].charCodeAt();
            sum += asciiValue;
          }
          console.log(sum);
        } else {
          console.log(`Invalid indices!`)
        }
        break;
    }
    line = data.shift();
  }
}
decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])