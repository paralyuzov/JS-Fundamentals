function arrayRotation(arr, rotation) {
    
    for(let i = 1; i <= rotation; i++) {

        let currElement = arr.shift();
        arr.push(currElement);
        

    }
    console.log(arr.join(" "))

}
arrayRotation([51, 47, 32, 61, 21], 2 );