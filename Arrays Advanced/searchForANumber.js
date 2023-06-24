function searchForAnumber(data, arr) {
    let elementsToTake = arr[0];
    let elementsToDelete = arr[1];
    let numberSearch = arr[2];

    let newArr = data.splice(0, elementsToTake);
    let arrAfterDelete = newArr.splice(elementsToDelete);
    let count = 0;
    for (let i = 0; i < arrAfterDelete.length; i++) {
        let currEl = arrAfterDelete[i];
        if (currEl === numberSearch) {
            count++;
        }
    }

    console.log(`Number ${numberSearch} occurs ${count} times.`)
}
searchForAnumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )