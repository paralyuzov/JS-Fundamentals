function printNthElement(arr) {
    let lenght = arr.length;
    let lastElement = Number(arr[lenght - 1]);
    let newArr = [];

    for (let i = 0; i < lenght - 1; i += lastElement) {
        let currElement = arr[i];
        newArr.push(currElement)
    }
    console.log(newArr.join(" "))

}
printNthElement(['5', '20', '31', '4', '20', '2']);
console.log("--------------")
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
console.log("--------------")
printNthElement(['1', '2', '3', '4', '5', '6']);