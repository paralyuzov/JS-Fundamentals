function reverseInPlace(arr) {
    let arrLenght = arr.length - 1;

    for (let i = 0; i < arrLenght / 2; i++) {
        let currElement = arr[i];
        let lastElement = arr[arrLenght - i];
        arr[i] = lastElement;
        arr[arrLenght - i] = currElement;
    }
    
    console.log(arr.join(" "))

}
reverseInPlace(['abc', 'def', 'hig',
    'klm', 'nop'])