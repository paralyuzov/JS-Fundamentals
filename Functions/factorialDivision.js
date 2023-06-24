function factorialDivision(firstN, secondN) {

    function factorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }
    let firstNfactorial = factorial(firstN);
    let secondNfactorial = factorial(secondN);
    let output = firstNfactorial / secondNfactorial;

    console.log(output.toFixed(2))
}

factorialDivision(5, 2);