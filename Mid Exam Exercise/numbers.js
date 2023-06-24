function numbers(num) {

    let arr = num.split(" ").map(Number);
    let sum = 0;
    let count = 0;
    let newArr = [];
    let resultArr = [];
   
    for(let i = 0; i < arr.length ; i++) {
        let currNum = arr[i];
        sum += currNum
        count++
    }

    let avarageSum = sum / count;

    for(let j = 0; j < arr.length; j++) {
        let curr = arr[j];
        if(curr > avarageSum) {
            newArr.push(curr);
        } 
    }

    newArr.sort((a,b) => b-a);
    
    for (let k = 0; k < newArr.length; k++) {
        let result = newArr[k];
        if(k < 5) {
            resultArr.push(result);
        }
    }
    if(resultArr.length === 0) {

        console.log("No");

    } else {

        console.log(resultArr.join(" "))
    }
    
    
}
numbers('-1 -2 -3 -4 -5 -6')