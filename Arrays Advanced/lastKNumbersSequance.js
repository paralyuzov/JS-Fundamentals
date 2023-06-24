function lastKNumberSequance(n, k) {

    let newArr = [1];

    while (n > newArr.length) {
        let kLenght = newArr.slice(-k);
        let sum = 0;
        for (let i = 0; i < kLenght.length; i++) {
            sum += kLenght[i];
        }
        newArr.push(sum);
    }

    console.log(newArr.join(" "))

}
lastKNumberSequance(15, 6)