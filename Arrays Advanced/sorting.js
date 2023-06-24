function sorting(data) {
    let sortNumber = data.sort((a,b) => a-b);
    let result = [];
    let length = sortNumber.length;

    for(let i = 0; i < length / 2 ; i++) {
        let biggestNum = sortNumber.pop();
        let smallestNum = sortNumber.shift();
        result.push(biggestNum);
        result.push(smallestNum)
       
    }
    console.log(result.join(" "))

}
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, ])