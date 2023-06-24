function bombNumbers(data, bombData) {
     
    let specialNumber = bombData[0];
    let bombPower = bombData[1];
    let output = 0;
 
    while (data.includes(specialNumber)) {
        let index = data.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        data.splice(startIndex, elementsToRemove);
    }
    
    for (const sum of data) {
        output += sum
    }
    console.log(output)

}
bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])