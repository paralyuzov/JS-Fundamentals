function distinctArray(data) {

    let newArr = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i]
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }
    console.log(newArr.join(" "))

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])