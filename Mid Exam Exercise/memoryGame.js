function memoryGame(elements) {

    let newArr = elements[0].split(" ");
    for (let i = 1; i < elements.length; i++) {
        let command = elements[i].split(" ");
        if (command[0] === "end") {
            break;
        }

        let currIndex = Number(command[0]);
        let nextIndex = Number((command[1]));
        let lenght = Math.trunc(newArr.length / 2);

        if (currIndex === nextIndex || currIndex < 0 || nextIndex < 0 || currIndex >= newArr.length || nextIndex >= newArr.length) {

            newArr.splice(lenght, 0, `-${i}a`);
            newArr.splice(lenght, 0, `-${i}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;

        } else if (newArr[currIndex] !== newArr[nextIndex]) {
            console.log("Try again!")
        }
        

        if (newArr[currIndex] === newArr[nextIndex]) {
            let element = newArr[currIndex];
            console.log(`Congrats! You have found matching elements - ${newArr[currIndex]}!`);
            newArr.splice(currIndex, 1);
            for (let i = 0; i < newArr.length; i++) {
                let searchEl = newArr[i];
                if (searchEl === element) {
                    let removeIndex = newArr.indexOf(searchEl);
                    newArr.splice(removeIndex, 1);
                    break;
                }
            }

        } 

        if (newArr.length === 0) {
            console.log(`You have won in ${i} turns!`)
            break;
        }
    }

    if (newArr.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(newArr.join(" "));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])