function binaryToDecimal(binary) {
    let lenght = binary.length;
    let buff = '';
    let result = 0;
    for (let i = lenght - 1; i >= 0; i--) {
        let currNum = binary[i];
        buff += currNum
    }

    for (let j = 0; j < buff.length; j++) {
        let num = Number(buff[j])
        if (num === 1) {
            let toDecimal = Math.pow(2, j);
            result += toDecimal;
        }


    }
    console.log(result)

}
binaryToDecimal("00001001")
binaryToDecimal("11110000")
