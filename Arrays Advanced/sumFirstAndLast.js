function sumFirstAndLast(input) {
    if (input.length === 1) {
        console.log(input.join(""));
        return;
    }

    let sum = Number(input[0]) + Number(input[input.length - 1]);
    console.log(sum);

}
sumFirstAndLast(['5', '10'])