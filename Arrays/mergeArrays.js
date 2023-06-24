function mergeArrays(firstArr, secArr) {
    let length = firstArr.length - 1;
    let newArr = [];

    for (let i = 0; i <= length; i++) {
        let firstElement = firstArr[i];
        let secondElement = secArr[i];

        if (i % 2 === 0) {
            let sum = Number(firstElement) + Number(secondElement);
            newArr.push(sum);
        } else {
            let concatenation = firstElement + secondElement;
            newArr.push(concatenation);
        }
    }

    console.log(newArr.join(" - "));

}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])
