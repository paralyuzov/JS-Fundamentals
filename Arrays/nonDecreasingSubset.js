function nonDecreasingSubset(arr) {
    let length = arr.length;
    let newArr = [];
    newArr.push(arr[0]);
    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            let prevElement = arr[i - 1];
            let currElement = arr[i];
            if (currElement >= prevElement) {
                if (currElement >= newArr[newArr.length - 1]) {
                    newArr.push(currElement);
                }
            }
        }
    }
    console.log(newArr.join(" "));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])