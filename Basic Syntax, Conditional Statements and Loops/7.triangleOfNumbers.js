function triangleOfNumber(num) {
    let buff = ""
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            buff += `${i} `
        }
        buff += "\n"
    }
    console.log(buff);
}
triangleOfNumber(12);