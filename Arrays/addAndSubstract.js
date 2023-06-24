function addAndSubstract(arr) {
    let arrLenght = arr.length - 1;
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i <= arrLenght; i++) {
        let curNum = arr[i];
        arrSum += curNum;
        if (curNum % 2 === 0) {
            newArr.push(arr[i] + i);
            newArrSum += arr[i] + i
        } else {
            newArr.push(arr[i] - i)
            newArrSum += arr[i] - i
        }
    }
    
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}
addAndSubstract([5, 15, 23, 56, 35])