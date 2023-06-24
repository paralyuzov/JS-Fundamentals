function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let currentNum = i;
        let sum = 0;
        while (currentNum > 0) {
            sum += currentNum % 10;
            currentNum = Math.trunc(currentNum / 10);
        }
        const isSpecialNumber = sum === 5 || sum === 7 || sum === 11;
        console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`)
    }

}
specialNumbers(20)