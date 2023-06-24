function addAndSubstract(firstN, secondN, thirdN) {

    function sum(firstN, secondN) {
        return firstN + secondN;
    }

    let result = sum(firstN, secondN);

    function substract(result, thirdN) {
        return result - thirdN;
    }
    return substract(result, thirdN)

}
console.log(addAndSubstract(42,58,100))