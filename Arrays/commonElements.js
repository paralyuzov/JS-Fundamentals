function commonElements(firstArr, secondArr) {
    let firstArrLength = firstArr.length - 1;
    let secondArrLength = secondArr.length - 1;

    for (let i = 0; i <= firstArrLength; i++) {
        for (let j = 0; j <= secondArrLength; j++) {
            let firstElement = firstArr[i];
            let nextElement = secondArr[j];

            if (firstElement === nextElement) {
                console.log(firstElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)