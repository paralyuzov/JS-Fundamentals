function negativeOrPositiveNumber(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let currNum = data[i];
        if (currNum < 0) {
            result.unshift(currNum)
        } else {
            result.push(currNum);
        }
    }

    console.log(result.join("\n"))
}
negativeOrPositiveNumber(['3', '-2', '0', '-1'])