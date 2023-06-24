function evenAndOddSubstraction(arr) {
    let length = arr.length - 1;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i <= length; i++) {
        let currNum = Number(arr[i]);
        if (currNum % 2 === 0) {
            sumEven += currNum;
        } else {
            sumOdd += currNum;
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference)
}
evenAndOddSubstraction([3, 5, 7, 9]);