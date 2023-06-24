function sumOfOddNumber(n) {
    let sum = 0;
    let counter = 0;
    let num = Number.MAX_SAFE_INTEGER
    for(let i = 1; i <= num ; i++) {
        if(i % 2 !== 0) {
            counter++;
            sum += i;
            console.log(i);
        }
        if(counter === n) {
            break;
        }
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumber(1000);