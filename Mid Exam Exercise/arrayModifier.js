function arrayModifier(arr) {

    let arrValues = arr[0].split(" ").map(Number);
    let index = 1;
    let command = arr[index];
    index++;

    while (command !== "end") {
        let element = command.split(" ");

        let currComand = element[0];
        let firstValue = Number(element[1]);
        let secondValue = Number(element[2]);

        switch (currComand) {
            case "swap":
                let temp = arrValues[firstValue];
                arrValues[firstValue] = arrValues[secondValue];
                arrValues[secondValue] = temp;
                break;

            case "multiply":
                let sum = arrValues[firstValue] * arrValues[secondValue];
                arrValues[firstValue] = sum;
                break;

            case "decrease":
                let mapArr = arrValues.map(x => x - 1);
                arrValues = mapArr
                break;
        }

        command = arr[index];
        index++
    }

    console.log(arrValues.join(", "))

}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])