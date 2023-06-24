function processOddNumbers(arr) {

    let newArr = arr.filter((e, i) => i % 2 !== 0)
    let resArr = newArr.map(e => e * 2).reverse("");
    console.log(resArr.join(" "))

}
processOddNumbers([3, 0, 10, 4, 7, 3])