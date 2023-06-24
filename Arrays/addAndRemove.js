function addAndRemove(arr) {

    let length = arr.length;
    let newArr = [];

    for (let i = 0; i < length; i++) {
        let currElement = arr[i];
        if (currElement === "add") {
            newArr.push(i + 1);
        } else if (currElement === "remove") {
            newArr.pop();
        }
    }

    let newArrLength = newArr.length;

    if (newArrLength === 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "))
    }

}
addAndRemove(['add', 'add', 'add', 'add']);
console.log("--------------");
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log("--------------");
addAndRemove(['remove', 'remove', 'remove']);