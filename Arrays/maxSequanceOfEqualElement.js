function maxSequanceOfEqualElement(arr) {
    let num = 0;
    let count = 1;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currNum = arr[i];
            let prevNum = arr[i - 1];
            if (currNum === prevNum) {
                count++;
                if (count > maxCount) {
                    maxCount = count;
                    num = currNum;
                }
                
            } else {
                count = 1;
            }
        }
    }
    console.log(`${(num + " ").repeat(maxCount)}`)
}
maxSequanceOfEqualElement([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);