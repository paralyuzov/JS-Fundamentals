function equalArrays(arr1, arr2) {
    let arrLenght = arr1.length - 1;
    let sum = 0;
    let isItIndentical = false;

    for (let i = 0; i <= arrLenght; i++) {
        
        let firstArrNum = Number(arr1[i]);
        let secondArrNum = Number(arr2[i]);

        if (firstArrNum !== secondArrNum) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            sum += firstArrNum;
        }

        if (i === arrLenght) {
            isItIndentical = true;
        }
    }

    if (isItIndentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10','20','30'],
['10','20','30']);