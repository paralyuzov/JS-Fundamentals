function printAndSum(a,b) {
    let sum = 0;
    let num = ""
    for(let i = a; i <= b; i++) {
        let curr = i;
        sum += curr;
        num += curr + " "
       
    }
    console.log(num)
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10);