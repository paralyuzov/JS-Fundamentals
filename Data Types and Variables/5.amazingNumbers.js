function amazingNumbers(n) {
    n = n.toString();
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        let currNum = Number(n[i]);
        sum += currNum; 
    }
    let result = sum.toString().includes('9');
    console.log(result ? 
        `${n} Amazing? True` :
        `${n} Amazing? False`);
}
amazingNumbers(999);