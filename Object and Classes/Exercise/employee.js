function employee(data) {
    let obj = {};
    for(let el of data) {
        obj.name = el;
        for(let [keys,value] of Object.entries(obj)) {
            console.log(`Name: ${value} -- Personal Number: ${value.length}`)
        }
        
    }
 
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])