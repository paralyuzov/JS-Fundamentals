function equalSums(arr) {
    let arrLenght = arr.length;
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let i = 0; i < arrLenght; i++) {
        for (let j = 0; j < arrLenght; j++) {
            if (j !== i) {
                let num = Number(arr[j]);
                if (j < i) {
                    leftSum += num;
                } else if (j > i) {
                    rightSum += num;
                }
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === arrLenght - 1) {
                rightSum = 0;
            }
        }
        
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }

    if (!isEqual) {
        console.log('no')
    }

}
equalSums([1, 2, 3, 3])