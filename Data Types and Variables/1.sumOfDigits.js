function sumOfDigit(n) {
    let numAsString = n.toString();
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let currNum = Number(numAsString[i]);
        sum += currNum;
    }
    console.log(sum)
}
sumOfDigit(200389169)