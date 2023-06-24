function maxNumber(arr) {
    let length = arr.length;
    let result = "";

    for (let i = 0; i < length; i++) {
        let currNum = Number(arr[i]);
        let isMax = true;

        for (let j = i; j < length; j++) {
            let nextNum = Number(arr[j + 1]);

            if (nextNum >= currNum) {
                isMax = false;
                break;
            }

        }

        if (isMax) {
            result += `${currNum} `;
        }

    }

    console.log(result);

} 
maxNumber([1, 4, 3, 2])