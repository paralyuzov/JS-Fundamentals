function oddAndEvenSum(digit) {

    let digitAsString = digit.toString();
    let lenght = digitAsString.length;
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < lenght; i++) {
        let currentDigit = Number(digitAsString[i]);
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit
        }

    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`

}
console.log(oddAndEvenSum(3495892137259234))