function condenseArrayOfNumbers(arr) {
    let newArr = [];
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1];
        }
        arr = newArr;
        newArr = []
    }
    console.log(arr.join(""));
}
condenseArrayOfNumbers([2, 10, 3])