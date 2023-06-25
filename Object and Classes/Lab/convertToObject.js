function convertToObject(string) {

    let obj = JSON.parse(string);
    let entries = Object.entries(obj);

    for (let [keys, value] of entries) {

        console.log(`${keys}: ${value}`)
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')