function arrayManipulator(data, arr) {
    let index = 0;
    let commands = arr[index];
    index++
    let resultArr = [];

    while (commands !== 'print') {

        let currComand = commands.split(" ");
        let command = currComand[0];
        switch (command) {
            case 'add':
                let addIndex = Number(currComand[1]);
                let addElement = Number(currComand[2]);
                data.splice(addIndex, 0, addElement);
                break;

            case 'addMany':
                let addManyIndex = Number(currComand[1]);
                for (let i = currComand.length - 1; i >= 2; i--) {
                    let addManyElement = Number(currComand[i]);
                    data.splice(addManyIndex, 0, addManyElement);
                }
                break;

            case 'contains':
                let containsElement = Number(currComand[1]);
                if (data.includes(containsElement)) {
                    console.log(data.indexOf(containsElement))
                } else {
                    console.log("-1")
                }
                break;

            case 'remove':
                let removeIndex = Number(currComand[1]);
                if (removeIndex >= 0 && removeIndex < data.length) {
                    data.splice(removeIndex, 1);
                }
                break;

            case 'shift':
                let shiftPosition = Number(currComand[1]);
                for (let i = 0; i < shiftPosition; i++) {
                    let shiftElement = data.shift();
                    data.push(shiftElement);
                }
                break;

            case 'sumPairs':
                let sum = 0;
                let itIsOdd = true;
                if (data.length % 2 !== 0) {
                    lastElement = data.pop();
                    itIsOdd = false;
                }
                for (let i = 0; i < data.length; i += 2) {
                    let firstN = data[i];
                    let secondN = data[i + 1];
                    sum = firstN + secondN;
                    resultArr.push(sum)
                }

                data.splice(-data.length);

                for (const el of resultArr) {
                    data.push(el);
                }
                
                resultArr.splice(-resultArr.length);

                if (!itIsOdd) {
                    data.push(lastElement)
                }
                break;
        }

        commands = arr[index];
        index++
    }

    console.log('[ ' + data.join(', ') + ' ]')


}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])